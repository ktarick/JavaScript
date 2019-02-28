var users = [
    { id: 1, username: "sa1", password: "sa1", firstname: "Super1", lastname: "Admin1", phone: "555-555-5555", email: "user1@user.com", isReviewer: true, isAdmin: true},
    { id: 2, username: "sa2", password: "sa2", firstname: "Super2", lastname: "Admin2", phone: "555-555-5555", email: "user2@user.com", isReviewer: true, isAdmin: true},
    { id: 3, username: "sa3", password: "sa3", firstname: "Super3", lastname: "Admin3", phone: "555-555-5555", email: "user3@user.com", isReviewer: true, isAdmin: false},
    { id: 4, username: "sa3", password: "sa4", firstname: "Super4", lastname: "Admin4", phone: "555-555-5555", email: "user4@user.com", isReviewer: true, isAdmin: false},
    { id: 5, username: "sa5", password: "sa5", firstname: "Super5", lastname: "Admin5", phone: "555-555-5555", email: "user5@user.com", isReviewer: false, isAdmin: false}
];

function loaded(){
    buildUserTable();
}

function buildUserTable(){
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(var user of users){
        var tr = "<tr>";
        tr += "<td class='center'>" + user.id + "</td>";
        tr += "<td>" + user.username + "</td>";
        tr += "<td>" + user.password + "</td>";
        tr += "<td>" + user.firstname + " " + user.lastname + "</td>";
        tr += "<td>" + user.phone + "</td>";
        tr += "<td>" + user.email + "</td>";
        tr += "<td class='center'>" + (user.isReviewer ? "Yes":"No") + "</td>";
        tr += "<td class='center'>" + (user.isAdmin ? "Yes":"No") + "</td>";
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    }
}