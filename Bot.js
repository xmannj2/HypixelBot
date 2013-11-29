function HypixelBot() {
    bot = {
        version: 1.1,
// Commands
// -----------------------------------------
        skip: function (data) {
            if (data.message == '!skip' && API.hasPermission(data.fromID, API.ROLE.BOUNCER)) API.moderateForceSkip()
        },
        lock: function (data) {
            if (data.message == '!lock' && API.hasPermission(data.fromID, API.ROLE.MANAGER)) API.moderateLockWaitList(true, false)
        },
        unlock: function (data) {
            if (data.message == '!unlock' && API.hasPermission(data.fromID, API.ROLE.MANAGER)) API.moderateLockWaitList(false, false)
        },
        meh: function (data) {
            if (data.message == '!meh' && API.hasPermission(data.fromID, API.ROLE.BOUNCER)) API.sendChat("Reserve Mehs for songs that are extremely overplayed, absolutely awful, or troll songs.")
        },
        forceskip: function (data) {
            var lockskip = API.getTimeRemaining() >= 1;
            if (lockskip == false) API.moderateForceSkip();
        },


    }

// Allow the commands to be used
// -----------------------------------------

    API.on(API.CHAT, bot.skip, this);
    API.on(API.CHAT, bot.lock, this);
    API.on(API.CHAT, bot.unlock, this);
    API.on(API.CHAT, bot.meh, this);
    API.on(API.DJ_ADVANCE, bot.forceskip, this);

    API.sendChat("Currently running Hypixel Bot v." + bot.version);

// Delete command in chat
// -----------------------------------------

    API.on(API.CHAT, callback);

    function callback(data) {
        var username = data.from;
        var id = data.fromID;
        var msg = data.message;

        if (data.message == '!lock') {
            API.moderateDeleteChat(data.chatID);
        }
        if (data.message == '!unlock') {
            API.moderateDeleteChat(data.chatID);
        }
        if (data.message == '!skip') {
            API.moderateDeleteChat(data.chatID);
        }
        if (data.message == '!meh') {
            API.moderateDeleteChat(data.chatID);
        }


// Prevent users from asking for fans
// -----------------------------------------

        if (msg.indexOf('fan me') > -1) {
            API.moderateDeleteChat(data.chatID);
            API.sendChat("@" + username + " Please don't ask for fans.");
        }
        if (msg.indexOf('fan 4 fan') > -1) {
            API.moderateDeleteChat(data.chatID);
            API.sendChat("@" + username + " Please don't ask for fans.");
        }
        if (msg.indexOf('fan for fan') > -1) {
            API.moderateDeleteChat(data.chatID);
            API.sendChat("@" + username + " Please don't ask for fans.");
        }
    }

// Swap command
// ---------------

}
HypixelBot();
// -------------------
// Created by xmannj2
// -------------------