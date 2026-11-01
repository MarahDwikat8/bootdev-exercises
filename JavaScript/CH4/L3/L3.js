function addID(campaignRecord) {
  campaignRecord.ID =
    campaignRecord.campaignName + "-" + campaignRecord.senderName;
}

// don't touch below this line

export { addID };
