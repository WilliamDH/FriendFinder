module.exports = {

    // The friends array stores data on how to match friends
    friends : [
        {
            "name": "Sam",
            "photo": "http://via.placeholder.com/350x150",
            "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        },
        {
            "name": "Marry",
            "photo": "http://via.placeholder.com/350x150",
            "scores":[ 3, 2, 5, 1, 1, 3, 1, 4, 2, 1]   

        },
        {
            "name": "Arthur",
            "photo": "http://via.placeholder.com/350x150",
            "scores":[ 1, 2, 2, 4, 5, 2, 2, 3, 3, 3]   

        },
    ],

    findBestFriend : function(myself = this.friends[0], friends = this.friends) {

        let bestFriend = myself;
        let bestFriendDifference = 1000;

        for (var i = 0; i < friends.length; i++) {

            const stranger = friends[i];

            if (stranger.name === myself.name) continue;

            let totalDifferences = 0;

            for (var j = 0; j < stranger.scores; j++) {

               totalDifferences += Math.abs(myself.scores[j] - stranger.scores[j]);

            }

            if (totalDifferences < bestFriendDifference) {

                bestFriendDifference = totalDifferences;
                bestFriend = stranger;

            }

        }

        return bestFriend;
    }
};
