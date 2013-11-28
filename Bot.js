function HypixelBot(){
bot = {
    skip: function(data) { if (data.message == '!skip' && API.hasPermission(data.fromID, API.ROLE.BOUNCER)) API.moderateForceSkip()},
    lock: function(data) { if (data.message == '!lock' && API.hasPermission(data.fromID, API.ROLE.MANAGER)) API.moderateLockWaitList(true,false)},
	
 }

	API.on(API.CHAT, bot.skip, this);
	API.on(API.CHAT, bot.lock, this);