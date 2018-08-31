

function getProfile(e){
    e.preventDefault();
    console.log('Fetching...');

    var username = document.getElementById('username').value;
    if(!username || username == ''){
        username = 'bradtraversy';
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            var user = JSON.parse(xhttp.responseText);
            document.getElementById('profile').innerHTML  = `<div class="row">
            <div class="offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-12 profile-header"></div>
                </div>
                <div class="row user-detail">
                    <div class="col-lg-12 col-sm-12 col-12">
                        <img src="${user.avatar_url}" class="rounded-circle img-thumbnail">
                        <h5 id="">${user.name}</h5>
                        <p><i class="fa fa-map-marker" aria-hidden="true"></i> ${user.location}</p>
      
                        <hr>
                        <a href="${user.html_url}" target="_blank" class="btn btn-success btn-sm">View Profile</a>
                        <a href="#" class="btn btn-info btn-sm"> ${user.public_repos}  Public Repository</a>
      
                        <hr>
                        <ul class="list-group">
                        <li class="list-group-item"> <b>Email: </b> ${user.email}</li>
                        <li class="list-group-item"> <b>Blog:</b> ${user.blog}</li>

                    </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>`;
    }
}

xhttp.open('GET', 'https://api.github.com/users/'+username, true);
xhttp.send();
}

document.getElementById('userForm').addEventListener('submit', getProfile, false);
