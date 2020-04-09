/*
 * Either reservation/nonreservations are both 'activity' but is either active or inactive or complete, incomplete.
 * Reservation is a potention activity, if a reservation is redeemed, then it becomes a regular activity which is active. 
 * If not, reservation becomes a incomplete activity?

 * If a user just checks out an item without the app, then the web will just create an activity for it and record it as activity.
 * If a user checks out an item with an reservation, ok therefore this will become a activity as well where it doesn't have any difference between regular activity AFTER it is redeemed
 * If a user reserved an item, and didn't pick up where this activity becomes a incomplete activity.
*/

/*
 * When user create a reservation, send to server to see if he can reserve item and server create this reservation for him and write to firebase & update counter.
 * When user redeem a reservation, send to server that mark this activity as active from inactive, and change activity status as 'checked out'
 * When user just checkout a item WITHOUT the app, send to server with ItemID, SID, TIMESTAMP to create this activity and mark it as 'checked out', and decrement the item counter.
 * When user return a item, send to server to mark this activity as 'complete' 
*/

