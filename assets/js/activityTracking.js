var UserActivityTracking = (function () {
    var tracker = {};
    tracker.track = trackActivity;
    function trackActivity(activityName, token) {
        $.ajax({
            url: '/UserActivityTracking/TrackActivity?activityName=' + encodeURIComponent(activityName),
            method: "POST",
            headers: { RequestVerificationToken: token },
            contentType: 'application/json',
            success: function() {
                //console.log('Activity tracked.');
                return true;
            },
            error: function(error) {
                //console.log('activity failed.');
                return false;
            }
        });
    }
    return tracker;
})();

var ActivityTracking = (function () {
    var tracker = {};
    tracker.trackLandingPage = trackLandingPageActivity;
    tracker.trackResource = trackResourceActivity;

    function trackLandingPageActivity(activityType, landingPageId, contactId, keyValueJson, landingPageVariantId, requestVerificationToken, onSuccess, onFailure) {
        
        if (contactId) {
            Cookies.set('contactId', contactId, { expires: 365 });
        } else {
            contactId = Cookies.get('contactId');
            if (!contactId) {
                contactId = '';
            }
        }

        $.ajax({
            url: '/ActivityTracking/LandingPage/Activity?' +
                'activityType=' + activityType +
                '&landingPageId=' + landingPageId +
                '&contactId=' + contactId +
                '&landingPageVariantId=' + landingPageVariantId,
            data: JSON.stringify(keyValueJson),
            contentType: 'application/json',
            headers: { RequestVerificationToken: requestVerificationToken },
            type: 'POST',
            success: function (response) {
                if (onSuccess) {
                    onSuccess(response);
                }
            },
            error: function (response) {
                if (onFailure) {
                    onFailure(response);
                }
            }
        });
        
    }

    function trackResourceActivity(activityType, resourceType, resourceId, resourceTitle, resourceThumbnailUrl, ownerId, contactId, subscriptionAddonId, campaignId, shortUrl, keyValueJson, requestVerificationToken, onSuccess, onFailure) {

        if (contactId) {
            Cookies.set('contactId', contactId, { expires: 365 });
        } else {
            contactId = Cookies.get('contactId');
        }

        $.ajax({
            url: '/ActivityTracking/Resource/Activity?' +
                'activityType=' + activityType +
                '&resourceType=' + resourceType +
                '&resourceId=' + resourceId +
                '&resourceTitle=' + encodeURIComponent(resourceTitle) + 
                '&resourceThumbnailUrl=' + encodeURIComponent(resourceThumbnailUrl) +
                '&ownerId=' + ownerId +
                '&contactId=' + contactId +
                '&subscriptionAddonId=' + subscriptionAddonId +
                '&campaignId=' + campaignId + 
                '&shortUrl=' + encodeURIComponent(shortUrl),
            data: JSON.stringify(keyValueJson),
            contentType: 'application/json',
            headers: { RequestVerificationToken: requestVerificationToken },
            type: 'POST',
            method: "POST",
            success: function (response) {
                if (onSuccess) {
                    onSuccess(response);
                }
            },
            error: function (response) {
                if (onFailure) {
                    onFailure(response);
                }
            }
        });
    }
    
    return tracker;
})();
