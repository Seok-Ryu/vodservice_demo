var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.IListItem) throw new Error("error");

com.castis.IListItem = new com.castis.Interface("listItem", ["beforeMake","makeItem", "afterMake","setMoustEvent"]);