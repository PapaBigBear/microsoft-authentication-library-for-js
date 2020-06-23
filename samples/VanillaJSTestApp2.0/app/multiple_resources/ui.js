// Select DOM elements to work with
const welcomeDiv = document.getElementById("WelcomeMessage");
const signInButton = document.getElementById("SignIn");
const cardDiv = document.getElementById("card-div");
const secondTokenButton = document.getElementById("secondToken");
const profileButton = document.getElementById("seeProfile");
const profileDiv = document.getElementById("profile-div");

function showWelcomeMessage(account) {
    // Reconfiguring DOM elements
    cardDiv.style.display = 'initial';
    username = account.username;
    welcomeDiv.innerHTML = `Welcome ${username}`;
    signInButton.nextElementSibling.style.display = 'none';
    signInButton.setAttribute("onclick", "signOut();");
    signInButton.setAttribute('class', "btn btn-success")
    signInButton.innerHTML = "Sign Out";
}

function updateUI(data, endpoint) {
    console.log('Graph API responded at: ' + new Date().toString());

    if (endpoint === graphConfig.graphMeEndpoint) {
        const firstDiv = document.createElement('div');
        firstDiv.id = "first-resource-div";
        const title = document.createElement('p');
        title.innerHTML = "<strong>Title: </strong>" + data.jobTitle;
        const email = document.createElement('p');
        email.innerHTML = "<strong>Mail: </strong>" + data.mail;
        const phone = document.createElement('p');
        phone.innerHTML = "<strong>Phone: </strong>" + data.businessPhones[0];
        const address = document.createElement('p');
        address.innerHTML = "<strong>Location: </strong>" + data.officeLocation;
        firstDiv.appendChild(title);
        firstDiv.appendChild(email);
        firstDiv.appendChild(phone);
        firstDiv.appendChild(address);
        profileDiv.appendChild(firstDiv);
    } else {
        const secondDiv = document.createElement('div');
        secondDiv.id = "second-resource-div";
        const cardBody = document.getElementsByClassName("card-body")[0]
        cardBody.appendChild(secondDiv);
        const title = document.createElement('p');
        title.innerHTML = data;
        secondDiv.appendChild(title);
    }
}
