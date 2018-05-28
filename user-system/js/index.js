window.onload = function() {

    Vue.component('user-name', {
        template: '\
    <li>\
    <i class="far fa-user-circle"></i>\
      <span>{{ title }}</span>\
      <button v-on:click="$emit(\'remove\')"><i class="fas fa-minus"></i></button>\
    </li>\
  ',
        props: ['title']
    })
    var userList = new Vue({
        el: '#user-list',
        data: {
            newUserName: '',
            users: [{
                    id: 1,
                    name: 'John Doe'
                },
                {
                    id: 2,
                    name: 'Jane Doe'
                },
                {
                    id: 3,
                    name: 'Otto Normalverbraucher'
                },
                {
                    id: 4,
                    name: 'Lieschen Müller'
                }
            ],
            nextUserId: 5
        },
        methods: {
            addNewUser: function() {
                this.users.push({
                    id: this.nextUserId++,
                    name: this.newUserName
                })
                this.newUserName = ''
            }
        },
        computed: {
            filteredList() {
                return this.postList.filter(post => {
                    return post.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    })
    var greeting = new Vue({
        el: '#SN-greeting',
        data: {
            greetings: [
                'Welcome,',
                'Willkommen,',
                'Bienvenue,',
                'Vítej,',
                'Velkommen,',
                'Benvenuto,',
                'Bem Vindo,',
                'Välkommen,',
                'Bienvenido,'
            ],
            selectedGreeting: ''
        },
        created() {
            const grt = Math.floor(Math.random() * this.greetings.length);
            this.selectedGreeting = this.greetings[grt]
        }
    })

    new Vue({
        el: '#MN-groups',
        data: {
            all: true,
        }
    });
    var groupOption = document.getElementsByClassName("MN-groupOpt");
    var setActive = function() {
        Array.from(groupOption).forEach(function(ele) {
            ele.classList.remove('group-active');
        });
        this.classList.add('group-active');
    };
    Array.from(groupOption).forEach(function(ele) {
        ele.addEventListener('click', setActive);
    });
};

function searchUsers() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('MN-searchinp');
    filter = input.value.toUpperCase();
    ul = document.getElementById("MN-userlist");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};