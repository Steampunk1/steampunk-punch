// Steampunk Punch — data helpers (plain ES module, no deps)
export const ZONES = [
  { key: 'cooker', num: '01', name: 'Cooker / Process Floor', short: 'Cooker' },
  { key: 'boiler', num: '02', name: 'Boiler Room', short: 'Boiler Room' },
  { key: 'mcc', num: '03', name: 'MCC & Exterior', short: 'MCC' },
  { key: 'rto', num: '04', name: 'RTO & Scrubbers', short: 'RTO' },
  { key: 'cooling', num: '05', name: 'Cooling Towers', short: 'Cooling' },
  { key: 'ww', num: '06', name: 'Wastewater', short: 'Wastewater' },
  { key: 'yard', num: '07', name: 'Outdoor Storage', short: 'Yard' },
];
export const UNASSIGNED = { key: 'none', num: '—', name: 'Unassigned', short: 'Unassigned' };
export const zoneByKey = (k) => ZONES.find(z => z.key === k) || UNASSIGNED;

// Order matters: specific systems before the broad process-floor bucket.
const RULES = [
  ['boiler', /boiler|feedwater|deaerator|\bDA\b|softener|blowdown|steam trap/i],
  ['cooling', /cooling.?tower|cooling water|\bCWS\b|\bCCW\b|basin fill|chiller/i],
  ['ww', /aerator|pond|\bDAF\b|MBBR|wastewater|\bWW\b|skimmer|belt press|lagoon|storm ?water|sludge|anoxic|equalization|rotary screen|surge tank|holding tank|irrigation|polymer|alum|coagulant|flocculant|diffuser|wet well|outfall|serum|sump|sewage/i],
  ['rto', /\bRTO\b|scrubber|venturi|pack(ed)? ?tower|oxidizer|room air|baghouse|bag house|cyclone|condens|spray chamber|damper|tail gas|vapor|biogas|flare|cross flow/i],
  ['mcc', /\bMCC\b|elec|cabinet|\bPLC\b|panel|HVAC|compressor|generator|transformer|switchgear|\bVFD\b|air dryer|compressed air/i],
  ['yard', /fat tank|finished fat|lemanco|silo|storage tank|load ?out|rail|scale|\bUCO\b|day tank|north tank|south tank|forklift|fork lift|lift truck|grounds|building/i],
  ['cooker', /cook|drain[eo]r|press|screw|centrifuge|hydrolyzer|dryer|hammer ?mill|rotolift|rotolock|rotolft|grind|hogg|hopper|crax|evaporator|magnet|pneumatic|blower|rotex|screen|bucket el|coagulator|lube|bearing|hydraulic|blood|feather|poultry|1800|200U|N4300|O4300|\bTST\b|raw|fines|\bmill\b|conveyor|separator|agitator|mixer|pump|fan|motor|gearbox|tank|valve|flow indicator|cooler|duct|johnson|condensate loop|unloader|production|processing|plant/i],
];
export function seedZone(a) {
  const hay = `${a.name} ${a.id} ${a.parentName || ''} ${a.cls || ''}`;
  for (const [key, re] of RULES) if (re.test(hay)) return key;
  return 'none';
}
export function isJunk(a) {
  const n = (a.name || '').trim();
  return /^\*trash\*/i.test(n) || /^del\b/i.test(n) || /^dup_/i.test(n) || /obsolete/i.test(a.parentName || '') || a.isLocation;
}

const TYPE_FIX = { 'COOLING-TOWER': 'COOLING TOWER', ROTOLFT: 'ROTOLIFT', SEPERATOR: 'SEPARATOR', 'BUCKET ELV': 'BUCKET ELEVATOR', SCREW: 'SCREW CONVEYOR', 'ELEC-CABINET': 'ELECTRICAL CABINET', 'ELEC CABINET': 'ELECTRICAL CABINET', 'RAIL SCALE': 'SCALE', 'LAB SCALE': 'SCALE', 'POULTRY STABILIZER SCALE': 'SCALE', 'NIR PM SCALE': 'SCALE', 'FORK LIFT': 'LIFT TRUCK', 'HYDRAULIC CONSOLE': 'HYDRAULIC UNIT' };
// MC type code: "100-SCREW CONVEYOR-4493" -> "SCREW CONVEYOR"; falls back to the uppercase prefix of the name, then class.
export function assetType(a) {
  let t = '';
  const m = String(a.id || '').match(/^\d+[\s-]+(.+?)[\s-]+\d+\w*$/); if (m) t = m[1];
  if (!t) { const n = String(a.name || '').match(/^([^,.]{2,40})[,.]\s*\S/); if (n && n[1] === n[1].toUpperCase()) t = n[1]; }
  if (!t) t = a.cls || 'OTHER';
  t = t.toUpperCase().replace(/\s*#\s*\d+\w*$/, '').replace(/-\d+\w*$/, '').replace(/\s+/g, ' ').trim();
  return TYPE_FIX[t] || t;
}
// Plain-language part of the name: "PUMP, MBBR wet well pump #2" -> "MBBR wet well pump #2"
export function assetDesc(a) {
  const name = String(a.name || '').replace(/\s+/g, ' ').trim(); const t = (a.type || assetType(a)).replace(/-/g, ' ');
  const norm = (s) => s.toUpperCase().replace(/-/g, ' ').replace(/\s*#\s*\d+\w*$/, '').replace(/\s+/g, ' ').trim();
  const ci = name.indexOf(',');
  if (ci > 0) { const head = norm(name.slice(0, ci)); if (head === t || TYPE_FIX[head] === t) { const rest = name.slice(ci + 1).trim(); if (rest.length >= 3) return rest; } }
  const up = name.toUpperCase().replace(/-/g, ' ');
  if (up.startsWith(t + ' ') || up.startsWith(t + '.')) { const rest = name.slice(t.length + 1).trim(); if (rest.length >= 4 && !/^#?\d+\w*$/.test(rest)) return rest; }
  return name;
}
const KEEP = new Set(['HVAC', 'NIR', 'PM', 'DAF', 'MCC', 'RTO', 'UCO', 'CIP', 'VFD', 'PLC', 'MBBR', 'TST', 'DA']);
export const titleCase = (s) => String(s || '').toLowerCase().split(' ').map(w => KEEP.has(w.toUpperCase()) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// RFC-ish CSV parser (quotes, doubled quotes, CRLF)
export function parseCSV(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; }
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell.length || row.length) { row.push(cell); rows.push(row); }
  return rows.filter(r => r.length > 1 || (r.length === 1 && r[0] !== ''));
}
// MC assets export (mc_assets.csv) -> asset objects
export function assetsFromCSV(text) {
  const rows = parseCSV(text); if (!rows.length) return [];
  const h = rows[0].map(s => s.trim()); const ix = (n) => h.indexOf(n);
  const I = { pk: ix('assetPk'), id: ix('assetId'), name: ix('assetName'), loc: ix('isLocation'), cls: ix('classificationName'), mfr: ix('manufacturerName'), model: ix('model'), serial: ix('serial'), ppk: ix('parentPk'), pname: ix('parentName') };
  if (I.pk < 0 || I.id < 0 || I.name < 0) return [];
  const out = [];
  for (let r = 1; r < rows.length; r++) {
    const c = rows[r]; if (!c[I.pk]) continue;
    out.push({ pk: c[I.pk], id: c[I.id], name: (c[I.name] || '').replace(/\u00a0/g, ' ').trim(), isLocation: String(c[I.loc]).toLowerCase() === 'true', cls: c[I.cls] || '', mfr: c[I.mfr] || '', model: c[I.model] || '', serial: c[I.serial] || '', parentPk: c[I.ppk] || '', parentName: c[I.pname] || '' });
  }
  return out;
}

export const PRI = [
  { n: 0, name: 'Critical', hint: 'Down, unsafe, or leaking product. Fix now.', color: '#D2402F' },
  { n: 1, name: 'High', hint: 'Will fail soon. Plan it this week.', color: '#E8631A' },
  { n: 2, name: 'Medium', hint: 'Running fine. Next PM or outage.', color: '#AEB6BD' },
  { n: 3, name: 'Low', hint: 'Cosmetic or housekeeping. When convenient.', color: '#AEB6BD' },
];

export const todayStr = (d = new Date()) => { const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000); return z.toISOString().slice(0, 10); };
export function addDays(dateStr, n) { const d = new Date(dateStr + 'T12:00:00'); d.setDate(d.getDate() + n); return todayStr(d); }
export function daysBetween(a, b) { return Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 86400000); }
const DOW = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export function fmtDue(due, today) {
  if (!due) return { label: 'NO DATE', tone: 'muted', late: false };
  const d = daysBetween(today, due);
  if (d < 0) return { label: `${-d}D LATE`, tone: 'late', late: true };
  if (d === 0) return { label: 'TODAY', tone: 'today', late: false };
  if (d === 1) return { label: 'TMRW', tone: 'soon', late: false };
  if (d < 7) return { label: DOW[new Date(due + 'T12:00:00').getDay()], tone: 'soon', late: false };
  return { label: due.slice(5).replace('-', '/'), tone: 'muted', late: false };
}
export const fmtMD = (iso) => iso ? iso.slice(5, 10).replace('-', '/') : '';
export const fmtStamp = (iso) => { if (!iso) return ''; const d = new Date(iso); return `${fmtMD(iso)} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; };

// MC work-request CSV (import-friendly columns)
export function buildMcCsv(tasks, crewName, zoneName) {
  const esc = (v) => { const s = String(v ?? ''); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const head = ['AssetID', 'AssetName', 'Description', 'Priority', 'Type', 'Shop', 'RequestedBy', 'RequestDate', 'Zone', 'PhotoCount', 'PunchRef'];
  const lines = [head.join(',')];
  for (const t of tasks) lines.push([t.assetId, t.assetName, t.note || '', t.pri, 'CO', 'Jackson Mechanical/Fab Shop', crewName(t.by), (t.created || '').slice(0, 10), zoneName(t.zone), (t.photos || []).length, t.id].map(esc).join(','));
  return lines.join('\r\n');
}
export const uid = () => Math.random().toString(36).slice(2, 8).toUpperCase();
