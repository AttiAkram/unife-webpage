// Function to get tweets and update the container
function updateTweets() {
    const twitterUrl = "https://twitter.com/NetflixIT";
    const tweetCount = 3;
    const widgetHTML = `<a class="twitter-timeline" href="${twitterUrl}" data-tweet-count="${tweetCount}">Tweets by Netflix</a>`;
    $("#tweet-container").html(widgetHTML);
    twttr.widgets.load();
}
$(document).ready(function () {
    updateTweets();
});