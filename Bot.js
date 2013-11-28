function HypixelBot(){
bot = {
    skip: function(data) { if (data.message == '!skip' && API.hasPermission(data.fromID, API.ROLE.BOUNCER)) API.moderateForceSkip()},
    lock: function(data) { if (data.message == '!lock' && API.hasPermission(data.fromID, API.ROLE.MANAGER)) API.moderateLockWaitList(true,false)},
    unlock: function(data) { if (data.message == '!unlock' && API.hasPermission(data.fromID, API.ROLE.MANAGER)) API.moderateLockWaitList(false,false)},
	meh: function(data) {if (data.message == '!meh' && API.hasPermission (data.fromID, API.ROLE.BOUNCER)) API.sendChat("Reserve Mehs for songs that are extremely overplayed, absolutely awful, or troll songs.")},
 }

	API.on(API.CHAT, bot.skip, this);
	API.on(API.CHAT, bot.lock, this);
	API.on(API.CHAT, bot.unlock, this);
	API.on(API.CHAT, bot.meh, this);