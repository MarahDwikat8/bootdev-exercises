//Evolving Any
export function collectSupportData(id: number, resolved: boolean) {
  const supportData = [];
  supportData.push("Support session started");
  supportData.push(id);
  supportData.push(resolved);
  return supportData;
}