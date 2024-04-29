fetch("https://api.randomuser.me/")
  .then((response) => response.json())
  .then((data) => {
    const user = data.results[0];
    document.getElementById("profilePic").src = user.picture.large;
    document.getElementById("name").textContent =
      user.name.first + " " + user.name.last;
    document.getElementById("email").textContent = user.email;
    document.getElementById(
      "address"
    ).textContent = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;
    document.getElementById("id").textContent =
      user.login.username + " (" + user.login.uuid + ")";
  })
  .catch((err) => console.error("Error fetching data: ", err));
