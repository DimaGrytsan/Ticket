var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var add = function (model, data) {
    var id = Date.now().toString() + 'general_service';
    model[id] = data;
    console.log('Task add | id:'+ id + ' | data: ' + data);
};

var update = function (model, data) {
    var id = data.id;
    var prop = data.prop;
    var data = data.data;
    model[id][prop] = data;
    console.log('Task update | id:'+ id + ' | update field: '+ prop +' | data: ' + data);
};

var remove = function (model, id) {
    delete model[id];
    console.log('Task delete | id:'+ id);
};


//=================== tasks =====================
app.get('/tasks', function (req, res) {
    res.json(tasks);
    res.end();
});
app.post('/tasks', function (req, res) {
    add(tasks, req.body.data);
    res.end();
});
app.put('/tasks', function (req, res) {
    update(tasks, req.body);
    res.end();
});
app.delete('/tasks', function (req, res) {
    remove(tasks, req.body.id);
    res.end();
});


//=================== tags =====================
app.get('/tags', function (req, res) {
    res.json(tags);
    res.end();
});
app.post('/tags', function (req, res) {
    add(tags, req.body.data);
    res.end();
});
app.put('/tags', function (req, res) {
    update(tags, req.body);
    res.end();
});
app.delete('/tags', function (req, res) {
    remove(tags, req.body.id);
    res.end();
});

//=================== corporations =====================
app.get('/corporations', function (req, res) {
    res.json(corporations);
    res.end();
});
app.post('/corporations', function (req, res) {
    add(corporations, req.body.data);
    res.end();
});
app.put('/corporations', function (req, res) {
    update(corporations, req.body);
    res.end();
});
app.delete('/corporations', function (req, res) {
    remove(corporations, req.body.id);
    res.end();
});


//=================== companies =====================

app.get('/companies', function (req, res) {
    res.json(companies);
    res.end();
});
app.post('/companies', function (req, res) {
    add(companies, req.body.data);
    res.end();
});
app.put('/companies', function (req, res) {
    update(companies, req.body);
    res.end();
});
app.delete('/companies', function (req, res) {
    remove(companies, req.body.id);
    res.end();
});


//=================== departaments =====================

app.get('/departaments', function (req, res) {
    res.json(departaments);
    res.end();
});
app.post('/departaments', function (req, res) {
    add(departaments, req.body.data);
    res.end();
});
app.put('/departaments', function (req, res) {
    update(departaments, req.body);
    res.end();
});
app.delete('/departaments', function (req, res) {
    remove(departaments, req.body.id);
    res.end();
});


//=================== users =====================

app.get('/users', function (req, res) {
    res.json(users);
    res.end();
});
app.post('/users', function (req, res) {
    add(users, req.body.data);
    res.end();
});
app.put('/users', function (req, res) {
    update(users, req.body);
    res.end();
});
app.delete('/users', function (req, res) {
    remove(users, req.body.id);
    res.end();
});



//=================== users =====================

app.get('/rooms', function (req, res) {
    res.json(rooms);
    res.end();
});
app.post('/rooms', function (req, res) {
    add(rooms, req.body.data);
    res.end();
});
app.put('/rooms', function (req, res) {
    update(rooms, req.body);
    res.end();
});
app.delete('/rooms', function (req, res) {
    remove(rooms, req.body.id);
    res.end();
});



//=================== users =====================

app.get('/messages', function (req, res) {
    res.json(messages);
    res.end();
});
app.post('/messages', function (req, res) {
    add(messages, req.body.data);
    res.end();
});
app.put('/messages', function (req, res) {
    update(messages, req.body);
    res.end();
});
app.delete('/messages', function (req, res) {
    remove(messages, req.body.id);
    res.end();
});


//=================== server start =====================
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


// =====================================================================================================================


var rooms = {
    "001rrrr": {title: "General", users: ["001r", "002asdf23", "0adsf08"]},
    "002rrrr": {title: "My room", users: ["0adsf12", "0adsf07", "0adsf08"]},
    "003rrrr": {title: "General", users: ["001r", "002asdf23", "0adsf08"]},
    "004rrrr": {title: "kaban", users: ["0adsf12", "0adsf07", "0adsf08"]}
};

var messages = {
    "001mmmm": {text: "Genagafgafgafgafgsfdgsfdgsfdgdfgeral", room: "001rrrr", user: "001r", date: "2017-04-04T12:24:36.444Z"},
    "002mmmm": {text: "ddddsdfgsdfgfdsgsferrrrrrrw ewrrrrrrrrrrrrrrr ewrrrrrrrrrrrrrr weeeeeeeeeeeeeee weqrrrrrrrrrr qwerrrrrrrrrrrrr qwerrrrrrrrrrrrrrr qewrrrrrrrrrrrrrrrr qewrrrrrrrrrrdgdsgsdfgdfgfdgdsfgfdd", room: "001rrrr", user: "0adsf07", date: "2017-04-02T12:24:36.444Z"},
    "003gggg": {text: "Gena33333333333333333ral", room: "002rrrr", user: "0adf11", date: "2017-04-04T12:34:36.444Z"},
    "003mmmm": {text: "Gena33333333333333333ral", room: "002rrrr", user: "001r", date: "2017-04-04T12:24:36.444Z"},
    "004mmmm": {text: "ddddsdffdfgdfgfdgdsfgfdd", room: "002rrrr", user: "01adf7", date: "2017-04-02T12:24:36.444Z"},
    "005mmmm": {text: "Genagafgafgafgafgsfdgsfdgsfdgdfgeral", room: "001rrrr", user: "001r", date: "2017-04-04T12:24:36.444Z"},
    "006mmmm": {text: "ddddsdfgsdfgfdsgsfdgdsgsdfgdfgfdgdsfgfdd", room: "001rrrr", user: "0adsf07", date: "2017-04-02T12:24:36.444Z"},
    "007gggg": {text: "Gena33333333333333333ral", room: "002rrrr", user: "0adf11", date: "2017-04-04T12:34:36.444Z"},
    "0038mmmm": {text: "Gena33333333333333333ral", room: "002rrrr", user: "001r", date: "2017-04-04T12:24:36.444Z"},
    "0049mmmm": {text: "ddddsdffdfgdfgfdgdsfgfdd", room: "002rrrr", user: "01adf7", date: "2017-04-02T12:24:36.444Z"}
};

var corporations = {
    "001ggg": {title: "GS"},
    "002ggg": {title: "Asus"}
};

var companies = {
    "001vvbvv": {title: "General Services", corporation: "001ggg"},
    "002vvbvv": {title: "LSS", corporation: "001ggg"},
    "003vvbvv": {title: "Asus Services", corporation: "002ggg"},
    "004vvbvv": {title: "Asus SS", corporation: "002ggg"}
};

var departaments = {
    "001dsf": {title: "GS Delivery", company: "001vvbvv"},
    "002dsf": {title: "GS Customer Care Center", company: '001vvbvv'},
    "003dsf": {title: "GS Distribution", company: "001vvbvv"},
    "004dsf": {title: "GS Development", company: "001vvbvv"},
    "005dsf": {title: "GS Finance", company: "001vvbvv"},

    "006dsf": {title: "LSS Delivery", company: "002vvbvv"},
    "007dsf": {title: "LSS Finance", company: "002vvbvv"},

    "008dsf": {title: "Asus Delivery", company: "003vvbvv"},
    "009dsf": {title: "Asus Customer Care Center", company: "003vvbvv"},
    "010dsf": {title: "Asus Distribution", company: "003vvbvv"},
    "011dsf": {title: "Asus Development", company: "003vvbvv"},
    "012dsf": {title: "Asus Finance", company: "003vvbvv"},

    "013dsf": {title: "SS Delivery", company: "004vvbvv"},
    "014dsf": {title: "SS Distribution", company: "004vvbvv"}
};

var users = {
    "001r": {title: 'Ткаченко Антон', departament: "001dsf"},
    "002asdf23": {title: 'Векленко Владислава', departament: "001dsf"},
    "003sdaf32": {title: 'Волотовская Дарья', departament: "001dsf"},

    "004sdf": {title: 'Мусийчук Карина', departament: "002dsf"},
    "00adsf5": {title: 'Гарамась Андрей', departament: "002dsf"},
    "00adsf6": {title: 'Метельская Вислава', departament: "002dsf"},
    "0adsf07": {title: 'Цандекова Анжелика', departament: "002dsf"},
    "0adsf08": {title: 'Анна Свирид', departament: "002dsf"},

    "0asdf09": {title: 'Ястржемский Александр', departament: "003dsf"},

    "0adsf10": {title: 'Овсийчук Дмитрий', departament: "004dsf"},
    "0adf11": {title: 'Грицан Дмитрий', departament: "004dsf"},

    "0adsf12": {title: 'Соболенко Александр', departament: "005dsf"},
    "0gg13": {title: 'Алексеенко Юлия', departament: "005dsf"},

    "01adf4": {title: 'Овсийчук Дмитрий', departament: "014dsf"},
    "01adf5": {title: 'Грицан Дмитрий', departament: "014dsf"},
    "01adf6": {title: 'Соболенко Александр', departament: "014dsf"},
    "01adf7": {title: 'Алексеенко Юлия', departament: "014dsf"}
};


var tags = {
    "12adf1": {name: "green", color: "green"},
    "12adf2": {name: "pink", color: "pink"},
    "33adsf3": {name: "red", color: "red"},
    "11df14": {name: "blue", color: "blue"}
};


var tasks = {
    "001ef": {
        "id": "001",
        "from": "Дима Грицан",
        "title": "Задача 1",
        "completed": false,
        "tag": 1,
        "important": true,
        "starred": true,
        "date_start": "2017-04-01T12:24:36.444Z",
        "date_end": "2017-04-05T01:00:00.000Z",
        "accept": "not",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": [
            {
                "filetype": "image/png",
                "filename": "map-location — копия.png",
                "filesize": 1398,
                "base64": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYhcXYe4xdVRXH8c+UUqnQOVWkE1qQKSmC4h/GoCI0YJCqragRawxpUAgSoqhBsBrC4+wDqUYgojQGgsG/KqLiI6FRW2MBAR9BKCGl4KO2pbS0PILHopY++WPtO3N7e+feuTOd9JfcrPNY5+zv3Xvttdc+fSkl41FZJJiCU3BMPn4F/8DL3Z6v6s7tTx4n3Dx8FefgDW1cnsJduAP/H0sbYwIsizQFP8Bn8WI+/gu2YA+m4534BL6Dy7AQa3pta9JYALEsw92C4/Fl/BjP41U8gCV4Lz6Go7EKx004YFmk8/FpfLOq02LsxXWiJ9fir3gJv8RsLMc89OO2XtsbyxB/A+tQlUU6HPfhw/gtfobtOBOXZtiz8IQY6qtxkphAo1JPPVgWaVAM211VnXbi6xnuSszHDzPkFTgN+/ATHCYmCnymlzZ7HeL3ZXt/WaRJ+IqIrVvb+D6Nr+FUfBDP4p/iD04Y4Jxs12AQM3BvB/+fZ9uAWiuGeNTqFfAtUNXpVcN5b3sH/0bue2O2r2BqLw32CrgTyiL1YSN24OwO/nOzfSrbKT221zPgtmwHqjr9Dz/F58SEaNVUfBv/FqkGThApaMIA/5bt27O9Oje4Cl/CAI4Qee8hEXuXo87+c/SQYsYC+Fi2Z0JVpy35eC2WYquIu5ViEi3C3fmZQTGpHp0wwKpOW0U8ndt0eT3eL+JtMa4Vue7EJjhNz6yaMMCsB3B6WaQjm67twyNibV4iYvM/Lc+dI8qvJ3tpbGipK4s0HR/o4LsXD4qAv1wUAfeMsp2p+Dh+ld8zV05ZuZ5s1bNVnR7fDxBniAW+k64SsfYiLugB8DwcKYa8H39AXwf/5aID9gMczPZDGaCdnqnqtKss0r34fFmkY0WJ1U2XiNn+O+zCyRm4nb6PmY2TZsATsRurqjrt6dLgHfgCvihKrU46RRQUN2U4mlJNa8lfFunvWNA4b54kg9g0CjhVnZ7E7zPkUV3crxJ/fGnL9SvxaFmkh8si9Tdd34wZuWo/AHBDN7gm3SQq5Ss6+MzBxfgRnmu5N10k8I3YXRZpRr7e8Js1LsCqTitxvyipBkZw+5aYtanNvetxblWnRZiG58siLWwCnDkEWBbpKNEbowbMWpxffnObe/PERul7o3jvjszyNjHExF5nqAcHs/1XL3RVnR4Ts+5CUVE3NA13YhOqUbxqF34jZnkDcBbDs7gBuKEXwKxr8FFR7r9bpJ3b8zvni13eiCqL9A7sreq0oOnaTi0xOHscgNtFUXA0fiH2KYvEJulpvCf7DYh1Ook98+EiE6xxYIhs1tKDs0U3bxkDIPxZ7E9ux+li8sw0/Ifn4F24MZ+/gGdECCzBd9sAHt8MOCjWv70Nj7JIJ4il6VRcX9Wp2572YbECHYNPZqA/iRJtXf5NFROioYtG+DazWVRI+wFuaHGaJtbLu3Pj3XSD2F5eIvLbg/nXrB2tD42gTTi/LFJfM+DjjbtlkT6C1VWdzuj0lrxxv1TMvovz5XrkJ0atLSJGByblZeZNovCUz3+Ni7rA9eOPIs2cncEOBhzDqea4yYZTzPpsjxVDu00b5djcI3Z4r4kcuOwggTW0KdtZzYAbsl0nkuuKFrDDRP33Kayo6jQfc0coOMeroeVusiizhgCrOu1GKot0Wlmk1SKwl4ovU/3iM0drWjjY2iq2EW9t9OBOBxae68VnjTfLhaqo6yZcuSjeJvfgIDZWddrX4vSy2OseKj2HWX37bvWECPbLDiFMO92GGY0eLLD6kOK0138n65LvDrVeB6rzcdHnsNunAAAAAElFTkSuQmCC"
            },
            {
                "filetype": "image/png",
                "filename": "logo-sc.png",
                "filesize": 3899,
                "base64": "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"
            }
        ]
    },
    "sfdsf002": {
        "id": "002",
        "from": "Дима Грицан",
        "title": "Fixx-me - разработка информационно-функционального ресурса",
        "important": false,
        "tag": 1,
        "completed": false,
        "starred": true,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-04-01T01:00:00.000Z",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": []
    },
    "sfdsf003": {
        "id": "003",
        "from": "Дима Грицан",
        "title": "Задача 3",
        "important": false,
        "tag": 1,
        "completed": true,
        "starred": true,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-03-29T01:00:00.000Z",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": []
    },
    "sdfdsf004": {
        "id": "004",
        "from": "Дима Грицан",
        "title": "Задача 4",
        "important": true,
        "tag": 1,
        "starred": true,
        "completed": true,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-03-29T01:00:00.000Z",
        "comment_cancel": "Потомушо нехачу",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": [
            {
                "filetype": "image/png",
                "filename": "map-location — копия.png",
                "filesize": 1398,
                "base64": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYhcXYe4xdVRXH8c+UUqnQOVWkE1qQKSmC4h/GoCI0YJCqragRawxpUAgSoqhBsBrC4+wDqUYgojQGgsG/KqLiI6FRW2MBAR9BKCGl4KO2pbS0PILHopY++WPtO3N7e+feuTOd9JfcrPNY5+zv3Xvttdc+fSkl41FZJJiCU3BMPn4F/8DL3Z6v6s7tTx4n3Dx8FefgDW1cnsJduAP/H0sbYwIsizQFP8Bn8WI+/gu2YA+m4534BL6Dy7AQa3pta9JYALEsw92C4/Fl/BjP41U8gCV4Lz6Go7EKx004YFmk8/FpfLOq02LsxXWiJ9fir3gJv8RsLMc89OO2XtsbyxB/A+tQlUU6HPfhw/gtfobtOBOXZtiz8IQY6qtxkphAo1JPPVgWaVAM211VnXbi6xnuSszHDzPkFTgN+/ATHCYmCnymlzZ7HeL3ZXt/WaRJ+IqIrVvb+D6Nr+FUfBDP4p/iD04Y4Jxs12AQM3BvB/+fZ9uAWiuGeNTqFfAtUNXpVcN5b3sH/0bue2O2r2BqLw32CrgTyiL1YSN24OwO/nOzfSrbKT221zPgtmwHqjr9Dz/F58SEaNVUfBv/FqkGThApaMIA/5bt27O9Oje4Cl/CAI4Qee8hEXuXo87+c/SQYsYC+Fi2Z0JVpy35eC2WYquIu5ViEi3C3fmZQTGpHp0wwKpOW0U8ndt0eT3eL+JtMa4Vue7EJjhNz6yaMMCsB3B6WaQjm67twyNibV4iYvM/Lc+dI8qvJ3tpbGipK4s0HR/o4LsXD4qAv1wUAfeMsp2p+Dh+ld8zV05ZuZ5s1bNVnR7fDxBniAW+k64SsfYiLugB8DwcKYa8H39AXwf/5aID9gMczPZDGaCdnqnqtKss0r34fFmkY0WJ1U2XiNn+O+zCyRm4nb6PmY2TZsATsRurqjrt6dLgHfgCvihKrU46RRQUN2U4mlJNa8lfFunvWNA4b54kg9g0CjhVnZ7E7zPkUV3crxJ/fGnL9SvxaFmkh8si9Tdd34wZuWo/AHBDN7gm3SQq5Ss6+MzBxfgRnmu5N10k8I3YXRZpRr7e8Js1LsCqTitxvyipBkZw+5aYtanNvetxblWnRZiG58siLWwCnDkEWBbpKNEbowbMWpxffnObe/PERul7o3jvjszyNjHExF5nqAcHs/1XL3RVnR4Ts+5CUVE3NA13YhOqUbxqF34jZnkDcBbDs7gBuKEXwKxr8FFR7r9bpJ3b8zvni13eiCqL9A7sreq0oOnaTi0xOHscgNtFUXA0fiH2KYvEJulpvCf7DYh1Ook98+EiE6xxYIhs1tKDs0U3bxkDIPxZ7E9ux+li8sw0/Ifn4F24MZ+/gGdECCzBd9sAHt8MOCjWv70Nj7JIJ4il6VRcX9Wp2572YbECHYNPZqA/iRJtXf5NFROioYtG+DazWVRI+wFuaHGaJtbLu3Pj3XSD2F5eIvLbg/nXrB2tD42gTTi/LFJfM+DjjbtlkT6C1VWdzuj0lrxxv1TMvovz5XrkJ0atLSJGByblZeZNovCUz3+Ni7rA9eOPIs2cncEOBhzDqea4yYZTzPpsjxVDu00b5djcI3Z4r4kcuOwggTW0KdtZzYAbsl0nkuuKFrDDRP33Kayo6jQfc0coOMeroeVusiizhgCrOu1GKot0Wlmk1SKwl4ovU/3iM0drWjjY2iq2EW9t9OBOBxae68VnjTfLhaqo6yZcuSjeJvfgIDZWddrX4vSy2OseKj2HWX37bvWECPbLDiFMO92GGY0eLLD6kOK0138n65LvDrVeB6rzcdHnsNunAAAAAElFTkSuQmCC"
            }
        ]
    },
    "sdfsfdsf005": {
        "id": "004",
        "from": "Дима Грицан",
        "title": "Задача 4",
        "important": true,
        "starred": true,
        "tag": 2,
        "completed": true,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-03-29T01:00:00.000Z",
        "comment_cancel": "Потомушо нехачу",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": [
            {
                "filetype": "image/png",
                "filename": "map-location — копия.png",
                "filesize": 1398,
                "base64": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYhcXYe4xdVRXH8c+UUqnQOVWkE1qQKSmC4h/GoCI0YJCqragRawxpUAgSoqhBsBrC4+wDqUYgojQGgsG/KqLiI6FRW2MBAR9BKCGl4KO2pbS0PILHopY++WPtO3N7e+feuTOd9JfcrPNY5+zv3Xvttdc+fSkl41FZJJiCU3BMPn4F/8DL3Z6v6s7tTx4n3Dx8FefgDW1cnsJduAP/H0sbYwIsizQFP8Bn8WI+/gu2YA+m4534BL6Dy7AQa3pta9JYALEsw92C4/Fl/BjP41U8gCV4Lz6Go7EKx004YFmk8/FpfLOq02LsxXWiJ9fir3gJv8RsLMc89OO2XtsbyxB/A+tQlUU6HPfhw/gtfobtOBOXZtiz8IQY6qtxkphAo1JPPVgWaVAM211VnXbi6xnuSszHDzPkFTgN+/ATHCYmCnymlzZ7HeL3ZXt/WaRJ+IqIrVvb+D6Nr+FUfBDP4p/iD04Y4Jxs12AQM3BvB/+fZ9uAWiuGeNTqFfAtUNXpVcN5b3sH/0bue2O2r2BqLw32CrgTyiL1YSN24OwO/nOzfSrbKT221zPgtmwHqjr9Dz/F58SEaNVUfBv/FqkGThApaMIA/5bt27O9Oje4Cl/CAI4Qee8hEXuXo87+c/SQYsYC+Fi2Z0JVpy35eC2WYquIu5ViEi3C3fmZQTGpHp0wwKpOW0U8ndt0eT3eL+JtMa4Vue7EJjhNz6yaMMCsB3B6WaQjm67twyNibV4iYvM/Lc+dI8qvJ3tpbGipK4s0HR/o4LsXD4qAv1wUAfeMsp2p+Dh+ld8zV05ZuZ5s1bNVnR7fDxBniAW+k64SsfYiLugB8DwcKYa8H39AXwf/5aID9gMczPZDGaCdnqnqtKss0r34fFmkY0WJ1U2XiNn+O+zCyRm4nb6PmY2TZsATsRurqjrt6dLgHfgCvihKrU46RRQUN2U4mlJNa8lfFunvWNA4b54kg9g0CjhVnZ7E7zPkUV3crxJ/fGnL9SvxaFmkh8si9Tdd34wZuWo/AHBDN7gm3SQq5Ss6+MzBxfgRnmu5N10k8I3YXRZpRr7e8Js1LsCqTitxvyipBkZw+5aYtanNvetxblWnRZiG58siLWwCnDkEWBbpKNEbowbMWpxffnObe/PERul7o3jvjszyNjHExF5nqAcHs/1XL3RVnR4Ts+5CUVE3NA13YhOqUbxqF34jZnkDcBbDs7gBuKEXwKxr8FFR7r9bpJ3b8zvni13eiCqL9A7sreq0oOnaTi0xOHscgNtFUXA0fiH2KYvEJulpvCf7DYh1Ook98+EiE6xxYIhs1tKDs0U3bxkDIPxZ7E9ux+li8sw0/Ifn4F24MZ+/gGdECCzBd9sAHt8MOCjWv70Nj7JIJ4il6VRcX9Wp2572YbECHYNPZqA/iRJtXf5NFROioYtG+DazWVRI+wFuaHGaJtbLu3Pj3XSD2F5eIvLbg/nXrB2tD42gTTi/LFJfM+DjjbtlkT6C1VWdzuj0lrxxv1TMvovz5XrkJ0atLSJGByblZeZNovCUz3+Ni7rA9eOPIs2cncEOBhzDqea4yYZTzPpsjxVDu00b5djcI3Z4r4kcuOwggTW0KdtZzYAbsl0nkuuKFrDDRP33Kayo6jQfc0coOMeroeVusiizhgCrOu1GKot0Wlmk1SKwl4ovU/3iM0drWjjY2iq2EW9t9OBOBxae68VnjTfLhaqo6yZcuSjeJvfgIDZWddrX4vSy2OseKj2HWX37bvWECPbLDiFMO92GGY0eLLD6kOK0138n65LvDrVeB6rzcdHnsNunAAAAAElFTkSuQmCC"
            }
        ]
    },
    "sdfdsfdsf006": {
        "id": "004",
        "from": "Дима Грицан",
        "title": "Задача 4",
        "important": true,
        "starred": true,
        "tag": 2,
        "completed": true,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-03-29T01:00:00.000Z",
        "comment_cancel": "Потомушо нехачу",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": [
            {
                "filetype": "image/png",
                "filename": "map-location — копия.png",
                "filesize": 1398,
                "base64": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYhcXYe4xdVRXH8c+UUqnQOVWkE1qQKSmC4h/GoCI0YJCqragRawxpUAgSoqhBsBrC4+wDqUYgojQGgsG/KqLiI6FRW2MBAR9BKCGl4KO2pbS0PILHopY++WPtO3N7e+feuTOd9JfcrPNY5+zv3Xvttdc+fSkl41FZJJiCU3BMPn4F/8DL3Z6v6s7tTx4n3Dx8FefgDW1cnsJduAP/H0sbYwIsizQFP8Bn8WI+/gu2YA+m4534BL6Dy7AQa3pta9JYALEsw92C4/Fl/BjP41U8gCV4Lz6Go7EKx004YFmk8/FpfLOq02LsxXWiJ9fir3gJv8RsLMc89OO2XtsbyxB/A+tQlUU6HPfhw/gtfobtOBOXZtiz8IQY6qtxkphAo1JPPVgWaVAM211VnXbi6xnuSszHDzPkFTgN+/ATHCYmCnymlzZ7HeL3ZXt/WaRJ+IqIrVvb+D6Nr+FUfBDP4p/iD04Y4Jxs12AQM3BvB/+fZ9uAWiuGeNTqFfAtUNXpVcN5b3sH/0bue2O2r2BqLw32CrgTyiL1YSN24OwO/nOzfSrbKT221zPgtmwHqjr9Dz/F58SEaNVUfBv/FqkGThApaMIA/5bt27O9Oje4Cl/CAI4Qee8hEXuXo87+c/SQYsYC+Fi2Z0JVpy35eC2WYquIu5ViEi3C3fmZQTGpHp0wwKpOW0U8ndt0eT3eL+JtMa4Vue7EJjhNz6yaMMCsB3B6WaQjm67twyNibV4iYvM/Lc+dI8qvJ3tpbGipK4s0HR/o4LsXD4qAv1wUAfeMsp2p+Dh+ld8zV05ZuZ5s1bNVnR7fDxBniAW+k64SsfYiLugB8DwcKYa8H39AXwf/5aID9gMczPZDGaCdnqnqtKss0r34fFmkY0WJ1U2XiNn+O+zCyRm4nb6PmY2TZsATsRurqjrt6dLgHfgCvihKrU46RRQUN2U4mlJNa8lfFunvWNA4b54kg9g0CjhVnZ7E7zPkUV3crxJ/fGnL9SvxaFmkh8si9Tdd34wZuWo/AHBDN7gm3SQq5Ss6+MzBxfgRnmu5N10k8I3YXRZpRr7e8Js1LsCqTitxvyipBkZw+5aYtanNvetxblWnRZiG58siLWwCnDkEWBbpKNEbowbMWpxffnObe/PERul7o3jvjszyNjHExF5nqAcHs/1XL3RVnR4Ts+5CUVE3NA13YhOqUbxqF34jZnkDcBbDs7gBuKEXwKxr8FFR7r9bpJ3b8zvni13eiCqL9A7sreq0oOnaTi0xOHscgNtFUXA0fiH2KYvEJulpvCf7DYh1Ook98+EiE6xxYIhs1tKDs0U3bxkDIPxZ7E9ux+li8sw0/Ifn4F24MZ+/gGdECCzBd9sAHt8MOCjWv70Nj7JIJ4il6VRcX9Wp2572YbECHYNPZqA/iRJtXf5NFROioYtG+DazWVRI+wFuaHGaJtbLu3Pj3XSD2F5eIvLbg/nXrB2tD42gTTi/LFJfM+DjjbtlkT6C1VWdzuj0lrxxv1TMvovz5XrkJ0atLSJGByblZeZNovCUz3+Ni7rA9eOPIs2cncEOBhzDqea4yYZTzPpsjxVDu00b5djcI3Z4r4kcuOwggTW0KdtZzYAbsl0nkuuKFrDDRP33Kayo6jQfc0coOMeroeVusiizhgCrOu1GKot0Wlmk1SKwl4ovU/3iM0drWjjY2iq2EW9t9OBOBxae68VnjTfLhaqo6yZcuSjeJvfgIDZWddrX4vSy2OseKj2HWX37bvWECPbLDiFMO92GGY0eLLD6kOK0138n65LvDrVeB6rzcdHnsNunAAAAAElFTkSuQmCC"
            }
        ]
    },
    "sdfdsfdsfds007": {
        "id": "004",
        "from": "Дима Грицан",
        "title": "Задача 4",
        "important": true,
        "starred": true,
        "tag": 3,
        "completed": true,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-03-29T01:00:00.000Z",
        "comment_cancel": "Потомушо нехачу",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": [
            {
                "filetype": "image/png",
                "filename": "map-location — копия.png",
                "filesize": 1398,
                "base64": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYhcXYe4xdVRXH8c+UUqnQOVWkE1qQKSmC4h/GoCI0YJCqragRawxpUAgSoqhBsBrC4+wDqUYgojQGgsG/KqLiI6FRW2MBAR9BKCGl4KO2pbS0PILHopY++WPtO3N7e+feuTOd9JfcrPNY5+zv3Xvttdc+fSkl41FZJJiCU3BMPn4F/8DL3Z6v6s7tTx4n3Dx8FefgDW1cnsJduAP/H0sbYwIsizQFP8Bn8WI+/gu2YA+m4534BL6Dy7AQa3pta9JYALEsw92C4/Fl/BjP41U8gCV4Lz6Go7EKx004YFmk8/FpfLOq02LsxXWiJ9fir3gJv8RsLMc89OO2XtsbyxB/A+tQlUU6HPfhw/gtfobtOBOXZtiz8IQY6qtxkphAo1JPPVgWaVAM211VnXbi6xnuSszHDzPkFTgN+/ATHCYmCnymlzZ7HeL3ZXt/WaRJ+IqIrVvb+D6Nr+FUfBDP4p/iD04Y4Jxs12AQM3BvB/+fZ9uAWiuGeNTqFfAtUNXpVcN5b3sH/0bue2O2r2BqLw32CrgTyiL1YSN24OwO/nOzfSrbKT221zPgtmwHqjr9Dz/F58SEaNVUfBv/FqkGThApaMIA/5bt27O9Oje4Cl/CAI4Qee8hEXuXo87+c/SQYsYC+Fi2Z0JVpy35eC2WYquIu5ViEi3C3fmZQTGpHp0wwKpOW0U8ndt0eT3eL+JtMa4Vue7EJjhNz6yaMMCsB3B6WaQjm67twyNibV4iYvM/Lc+dI8qvJ3tpbGipK4s0HR/o4LsXD4qAv1wUAfeMsp2p+Dh+ld8zV05ZuZ5s1bNVnR7fDxBniAW+k64SsfYiLugB8DwcKYa8H39AXwf/5aID9gMczPZDGaCdnqnqtKss0r34fFmkY0WJ1U2XiNn+O+zCyRm4nb6PmY2TZsATsRurqjrt6dLgHfgCvihKrU46RRQUN2U4mlJNa8lfFunvWNA4b54kg9g0CjhVnZ7E7zPkUV3crxJ/fGnL9SvxaFmkh8si9Tdd34wZuWo/AHBDN7gm3SQq5Ss6+MzBxfgRnmu5N10k8I3YXRZpRr7e8Js1LsCqTitxvyipBkZw+5aYtanNvetxblWnRZiG58siLWwCnDkEWBbpKNEbowbMWpxffnObe/PERul7o3jvjszyNjHExF5nqAcHs/1XL3RVnR4Ts+5CUVE3NA13YhOqUbxqF34jZnkDcBbDs7gBuKEXwKxr8FFR7r9bpJ3b8zvni13eiCqL9A7sreq0oOnaTi0xOHscgNtFUXA0fiH2KYvEJulpvCf7DYh1Ook98+EiE6xxYIhs1tKDs0U3bxkDIPxZ7E9ux+li8sw0/Ifn4F24MZ+/gGdECCzBd9sAHt8MOCjWv70Nj7JIJ4il6VRcX9Wp2572YbECHYNPZqA/iRJtXf5NFROioYtG+DazWVRI+wFuaHGaJtbLu3Pj3XSD2F5eIvLbg/nXrB2tD42gTTi/LFJfM+DjjbtlkT6C1VWdzuj0lrxxv1TMvovz5XrkJ0atLSJGByblZeZNovCUz3+Ni7rA9eOPIs2cncEOBhzDqea4yYZTzPpsjxVDu00b5djcI3Z4r4kcuOwggTW0KdtZzYAbsl0nkuuKFrDDRP33Kayo6jQfc0coOMeroeVusiizhgCrOu1GKot0Wlmk1SKwl4ovU/3iM0drWjjY2iq2EW9t9OBOBxae68VnjTfLhaqo6yZcuSjeJvfgIDZWddrX4vSy2OseKj2HWX37bvWECPbLDiFMO92GGY0eLLD6kOK0138n65LvDrVeB6rzcdHnsNunAAAAAElFTkSuQmCC"
            }
        ]
    },
    "009sdfdsf": {
        "id": "004",
        "from": "Дима Грицан",
        "title": "Задача 4",
        "important": true,
        "starred": true,
        "tag": 3,
        "completed": true,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-03-29T01:00:00.000Z",
        "comment_cancel": "Потомушо нехачу",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": [
            {
                "filetype": "image/png",
                "filename": "map-location — копия.png",
                "filesize": 1398,
                "base64": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYhcXYe4xdVRXH8c+UUqnQOVWkE1qQKSmC4h/GoCI0YJCqragRawxpUAgSoqhBsBrC4+wDqUYgojQGgsG/KqLiI6FRW2MBAR9BKCGl4KO2pbS0PILHopY++WPtO3N7e+feuTOd9JfcrPNY5+zv3Xvttdc+fSkl41FZJJiCU3BMPn4F/8DL3Z6v6s7tTx4n3Dx8FefgDW1cnsJduAP/H0sbYwIsizQFP8Bn8WI+/gu2YA+m4534BL6Dy7AQa3pta9JYALEsw92C4/Fl/BjP41U8gCV4Lz6Go7EKx004YFmk8/FpfLOq02LsxXWiJ9fir3gJv8RsLMc89OO2XtsbyxB/A+tQlUU6HPfhw/gtfobtOBOXZtiz8IQY6qtxkphAo1JPPVgWaVAM211VnXbi6xnuSszHDzPkFTgN+/ATHCYmCnymlzZ7HeL3ZXt/WaRJ+IqIrVvb+D6Nr+FUfBDP4p/iD04Y4Jxs12AQM3BvB/+fZ9uAWiuGeNTqFfAtUNXpVcN5b3sH/0bue2O2r2BqLw32CrgTyiL1YSN24OwO/nOzfSrbKT221zPgtmwHqjr9Dz/F58SEaNVUfBv/FqkGThApaMIA/5bt27O9Oje4Cl/CAI4Qee8hEXuXo87+c/SQYsYC+Fi2Z0JVpy35eC2WYquIu5ViEi3C3fmZQTGpHp0wwKpOW0U8ndt0eT3eL+JtMa4Vue7EJjhNz6yaMMCsB3B6WaQjm67twyNibV4iYvM/Lc+dI8qvJ3tpbGipK4s0HR/o4LsXD4qAv1wUAfeMsp2p+Dh+ld8zV05ZuZ5s1bNVnR7fDxBniAW+k64SsfYiLugB8DwcKYa8H39AXwf/5aID9gMczPZDGaCdnqnqtKss0r34fFmkY0WJ1U2XiNn+O+zCyRm4nb6PmY2TZsATsRurqjrt6dLgHfgCvihKrU46RRQUN2U4mlJNa8lfFunvWNA4b54kg9g0CjhVnZ7E7zPkUV3crxJ/fGnL9SvxaFmkh8si9Tdd34wZuWo/AHBDN7gm3SQq5Ss6+MzBxfgRnmu5N10k8I3YXRZpRr7e8Js1LsCqTitxvyipBkZw+5aYtanNvetxblWnRZiG58siLWwCnDkEWBbpKNEbowbMWpxffnObe/PERul7o3jvjszyNjHExF5nqAcHs/1XL3RVnR4Ts+5CUVE3NA13YhOqUbxqF34jZnkDcBbDs7gBuKEXwKxr8FFR7r9bpJ3b8zvni13eiCqL9A7sreq0oOnaTi0xOHscgNtFUXA0fiH2KYvEJulpvCf7DYh1Ook98+EiE6xxYIhs1tKDs0U3bxkDIPxZ7E9ux+li8sw0/Ifn4F24MZ+/gGdECCzBd9sAHt8MOCjWv70Nj7JIJ4il6VRcX9Wp2572YbECHYNPZqA/iRJtXf5NFROioYtG+DazWVRI+wFuaHGaJtbLu3Pj3XSD2F5eIvLbg/nXrB2tD42gTTi/LFJfM+DjjbtlkT6C1VWdzuj0lrxxv1TMvovz5XrkJ0atLSJGByblZeZNovCUz3+Ni7rA9eOPIs2cncEOBhzDqea4yYZTzPpsjxVDu00b5djcI3Z4r4kcuOwggTW0KdtZzYAbsl0nkuuKFrDDRP33Kayo6jQfc0coOMeroeVusiizhgCrOu1GKot0Wlmk1SKwl4ovU/3iM0drWjjY2iq2EW9t9OBOBxae68VnjTfLhaqo6yZcuSjeJvfgIDZWddrX4vSy2OseKj2HWX37bvWECPbLDiFMO92GGY0eLLD6kOK0138n65LvDrVeB6rzcdHnsNunAAAAAElFTkSuQmCC"
            }
        ]
    },
    "010sdfdsfdsf": {
        "id": "004",
        "from": "Дима Грицан",
        "title": "Задача 4",
        "important": true,
        "starred": true,
        "tag": 3,
        "completed": false,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-03-02T01:00:00.000Z",
        "comment_cancel": "Потомушо нехачу",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": [
            {
                "filetype": "image/png",
                "filename": "map-location — копия.png",
                "filesize": 1398,
                "base64": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYhcXYe4xdVRXH8c+UUqnQOVWkE1qQKSmC4h/GoCI0YJCqragRawxpUAgSoqhBsBrC4+wDqUYgojQGgsG/KqLiI6FRW2MBAR9BKCGl4KO2pbS0PILHopY++WPtO3N7e+feuTOd9JfcrPNY5+zv3Xvttdc+fSkl41FZJJiCU3BMPn4F/8DL3Z6v6s7tTx4n3Dx8FefgDW1cnsJduAP/H0sbYwIsizQFP8Bn8WI+/gu2YA+m4534BL6Dy7AQa3pta9JYALEsw92C4/Fl/BjP41U8gCV4Lz6Go7EKx004YFmk8/FpfLOq02LsxXWiJ9fir3gJv8RsLMc89OO2XtsbyxB/A+tQlUU6HPfhw/gtfobtOBOXZtiz8IQY6qtxkphAo1JPPVgWaVAM211VnXbi6xnuSszHDzPkFTgN+/ATHCYmCnymlzZ7HeL3ZXt/WaRJ+IqIrVvb+D6Nr+FUfBDP4p/iD04Y4Jxs12AQM3BvB/+fZ9uAWiuGeNTqFfAtUNXpVcN5b3sH/0bue2O2r2BqLw32CrgTyiL1YSN24OwO/nOzfSrbKT221zPgtmwHqjr9Dz/F58SEaNVUfBv/FqkGThApaMIA/5bt27O9Oje4Cl/CAI4Qee8hEXuXo87+c/SQYsYC+Fi2Z0JVpy35eC2WYquIu5ViEi3C3fmZQTGpHp0wwKpOW0U8ndt0eT3eL+JtMa4Vue7EJjhNz6yaMMCsB3B6WaQjm67twyNibV4iYvM/Lc+dI8qvJ3tpbGipK4s0HR/o4LsXD4qAv1wUAfeMsp2p+Dh+ld8zV05ZuZ5s1bNVnR7fDxBniAW+k64SsfYiLugB8DwcKYa8H39AXwf/5aID9gMczPZDGaCdnqnqtKss0r34fFmkY0WJ1U2XiNn+O+zCyRm4nb6PmY2TZsATsRurqjrt6dLgHfgCvihKrU46RRQUN2U4mlJNa8lfFunvWNA4b54kg9g0CjhVnZ7E7zPkUV3crxJ/fGnL9SvxaFmkh8si9Tdd34wZuWo/AHBDN7gm3SQq5Ss6+MzBxfgRnmu5N10k8I3YXRZpRr7e8Js1LsCqTitxvyipBkZw+5aYtanNvetxblWnRZiG58siLWwCnDkEWBbpKNEbowbMWpxffnObe/PERul7o3jvjszyNjHExF5nqAcHs/1XL3RVnR4Ts+5CUVE3NA13YhOqUbxqF34jZnkDcBbDs7gBuKEXwKxr8FFR7r9bpJ3b8zvni13eiCqL9A7sreq0oOnaTi0xOHscgNtFUXA0fiH2KYvEJulpvCf7DYh1Ook98+EiE6xxYIhs1tKDs0U3bxkDIPxZ7E9ux+li8sw0/Ifn4F24MZ+/gGdECCzBd9sAHt8MOCjWv70Nj7JIJ4il6VRcX9Wp2572YbECHYNPZqA/iRJtXf5NFROioYtG+DazWVRI+wFuaHGaJtbLu3Pj3XSD2F5eIvLbg/nXrB2tD42gTTi/LFJfM+DjjbtlkT6C1VWdzuj0lrxxv1TMvovz5XrkJ0atLSJGByblZeZNovCUz3+Ni7rA9eOPIs2cncEOBhzDqea4yYZTzPpsjxVDu00b5djcI3Z4r4kcuOwggTW0KdtZzYAbsl0nkuuKFrDDRP33Kayo6jQfc0coOMeroeVusiizhgCrOu1GKot0Wlmk1SKwl4ovU/3iM0drWjjY2iq2EW9t9OBOBxae68VnjTfLhaqo6yZcuSjeJvfgIDZWddrX4vSy2OseKj2HWX37bvWECPbLDiFMO92GGY0eLLD6kOK0138n65LvDrVeB6rzcdHnsNunAAAAAElFTkSuQmCC"
            }
        ]
    },
    "1121sdfsdf": {
        "id": "004",
        "from": "Дима Грицан",
        "title": "Задача 4",
        "important": true,
        "starred": true,
        "tag": 002,
        "completed": true,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-03-29T01:00:00.000Z",
        "comment_cancel": "Потомушо нехачу",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": [
            {
                "filetype": "image/png",
                "filename": "map-location — копия.png",
                "filesize": 1398,
                "base64": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYhcXYe4xdVRXH8c+UUqnQOVWkE1qQKSmC4h/GoCI0YJCqragRawxpUAgSoqhBsBrC4+wDqUYgojQGgsG/KqLiI6FRW2MBAR9BKCGl4KO2pbS0PILHopY++WPtO3N7e+feuTOd9JfcrPNY5+zv3Xvttdc+fSkl41FZJJiCU3BMPn4F/8DL3Z6v6s7tTx4n3Dx8FefgDW1cnsJduAP/H0sbYwIsizQFP8Bn8WI+/gu2YA+m4534BL6Dy7AQa3pta9JYALEsw92C4/Fl/BjP41U8gCV4Lz6Go7EKx004YFmk8/FpfLOq02LsxXWiJ9fir3gJv8RsLMc89OO2XtsbyxB/A+tQlUU6HPfhw/gtfobtOBOXZtiz8IQY6qtxkphAo1JPPVgWaVAM211VnXbi6xnuSszHDzPkFTgN+/ATHCYmCnymlzZ7HeL3ZXt/WaRJ+IqIrVvb+D6Nr+FUfBDP4p/iD04Y4Jxs12AQM3BvB/+fZ9uAWiuGeNTqFfAtUNXpVcN5b3sH/0bue2O2r2BqLw32CrgTyiL1YSN24OwO/nOzfSrbKT221zPgtmwHqjr9Dz/F58SEaNVUfBv/FqkGThApaMIA/5bt27O9Oje4Cl/CAI4Qee8hEXuXo87+c/SQYsYC+Fi2Z0JVpy35eC2WYquIu5ViEi3C3fmZQTGpHp0wwKpOW0U8ndt0eT3eL+JtMa4Vue7EJjhNz6yaMMCsB3B6WaQjm67twyNibV4iYvM/Lc+dI8qvJ3tpbGipK4s0HR/o4LsXD4qAv1wUAfeMsp2p+Dh+ld8zV05ZuZ5s1bNVnR7fDxBniAW+k64SsfYiLugB8DwcKYa8H39AXwf/5aID9gMczPZDGaCdnqnqtKss0r34fFmkY0WJ1U2XiNn+O+zCyRm4nb6PmY2TZsATsRurqjrt6dLgHfgCvihKrU46RRQUN2U4mlJNa8lfFunvWNA4b54kg9g0CjhVnZ7E7zPkUV3crxJ/fGnL9SvxaFmkh8si9Tdd34wZuWo/AHBDN7gm3SQq5Ss6+MzBxfgRnmu5N10k8I3YXRZpRr7e8Js1LsCqTitxvyipBkZw+5aYtanNvetxblWnRZiG58siLWwCnDkEWBbpKNEbowbMWpxffnObe/PERul7o3jvjszyNjHExF5nqAcHs/1XL3RVnR4Ts+5CUVE3NA13YhOqUbxqF34jZnkDcBbDs7gBuKEXwKxr8FFR7r9bpJ3b8zvni13eiCqL9A7sreq0oOnaTi0xOHscgNtFUXA0fiH2KYvEJulpvCf7DYh1Ook98+EiE6xxYIhs1tKDs0U3bxkDIPxZ7E9ux+li8sw0/Ifn4F24MZ+/gGdECCzBd9sAHt8MOCjWv70Nj7JIJ4il6VRcX9Wp2572YbECHYNPZqA/iRJtXf5NFROioYtG+DazWVRI+wFuaHGaJtbLu3Pj3XSD2F5eIvLbg/nXrB2tD42gTTi/LFJfM+DjjbtlkT6C1VWdzuj0lrxxv1TMvovz5XrkJ0atLSJGByblZeZNovCUz3+Ni7rA9eOPIs2cncEOBhzDqea4yYZTzPpsjxVDu00b5djcI3Z4r4kcuOwggTW0KdtZzYAbsl0nkuuKFrDDRP33Kayo6jQfc0coOMeroeVusiizhgCrOu1GKot0Wlmk1SKwl4ovU/3iM0drWjjY2iq2EW9t9OBOBxae68VnjTfLhaqo6yZcuSjeJvfgIDZWddrX4vSy2OseKj2HWX37bvWECPbLDiFMO92GGY0eLLD6kOK0138n65LvDrVeB6rzcdHnsNunAAAAAElFTkSuQmCC"
            }
        ]
    },
    "sdfdsf00222": {
        "id": "004",
        "from": "Дима Грицан",
        "title": "Задача 4",
        "important": true,
        "tag": 001,
        "starred": true,
        "completed": true,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-04-20T01:00:00.000Z",
        "comment_cancel": "Потомушо нехачу",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        "type": "Personal",
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": [
            {
                "filetype": "image/png",
                "filename": "map-location — копия.png",
                "filesize": 1398,
                "base64": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYhcXYe4xdVRXH8c+UUqnQOVWkE1qQKSmC4h/GoCI0YJCqragRawxpUAgSoqhBsBrC4+wDqUYgojQGgsG/KqLiI6FRW2MBAR9BKCGl4KO2pbS0PILHopY++WPtO3N7e+feuTOd9JfcrPNY5+zv3Xvttdc+fSkl41FZJJiCU3BMPn4F/8DL3Z6v6s7tTx4n3Dx8FefgDW1cnsJduAP/H0sbYwIsizQFP8Bn8WI+/gu2YA+m4534BL6Dy7AQa3pta9JYALEsw92C4/Fl/BjP41U8gCV4Lz6Go7EKx004YFmk8/FpfLOq02LsxXWiJ9fir3gJv8RsLMc89OO2XtsbyxB/A+tQlUU6HPfhw/gtfobtOBOXZtiz8IQY6qtxkphAo1JPPVgWaVAM211VnXbi6xnuSszHDzPkFTgN+/ATHCYmCnymlzZ7HeL3ZXt/WaRJ+IqIrVvb+D6Nr+FUfBDP4p/iD04Y4Jxs12AQM3BvB/+fZ9uAWiuGeNTqFfAtUNXpVcN5b3sH/0bue2O2r2BqLw32CrgTyiL1YSN24OwO/nOzfSrbKT221zPgtmwHqjr9Dz/F58SEaNVUfBv/FqkGThApaMIA/5bt27O9Oje4Cl/CAI4Qee8hEXuXo87+c/SQYsYC+Fi2Z0JVpy35eC2WYquIu5ViEi3C3fmZQTGpHp0wwKpOW0U8ndt0eT3eL+JtMa4Vue7EJjhNz6yaMMCsB3B6WaQjm67twyNibV4iYvM/Lc+dI8qvJ3tpbGipK4s0HR/o4LsXD4qAv1wUAfeMsp2p+Dh+ld8zV05ZuZ5s1bNVnR7fDxBniAW+k64SsfYiLugB8DwcKYa8H39AXwf/5aID9gMczPZDGaCdnqnqtKss0r34fFmkY0WJ1U2XiNn+O+zCyRm4nb6PmY2TZsATsRurqjrt6dLgHfgCvihKrU46RRQUN2U4mlJNa8lfFunvWNA4b54kg9g0CjhVnZ7E7zPkUV3crxJ/fGnL9SvxaFmkh8si9Tdd34wZuWo/AHBDN7gm3SQq5Ss6+MzBxfgRnmu5N10k8I3YXRZpRr7e8Js1LsCqTitxvyipBkZw+5aYtanNvetxblWnRZiG58siLWwCnDkEWBbpKNEbowbMWpxffnObe/PERul7o3jvjszyNjHExF5nqAcHs/1XL3RVnR4Ts+5CUVE3NA13YhOqUbxqF34jZnkDcBbDs7gBuKEXwKxr8FFR7r9bpJ3b8zvni13eiCqL9A7sreq0oOnaTi0xOHscgNtFUXA0fiH2KYvEJulpvCf7DYh1Ook98+EiE6xxYIhs1tKDs0U3bxkDIPxZ7E9ux+li8sw0/Ifn4F24MZ+/gGdECCzBd9sAHt8MOCjWv70Nj7JIJ4il6VRcX9Wp2572YbECHYNPZqA/iRJtXf5NFROioYtG+DazWVRI+wFuaHGaJtbLu3Pj3XSD2F5eIvLbg/nXrB2tD42gTTi/LFJfM+DjjbtlkT6C1VWdzuj0lrxxv1TMvovz5XrkJ0atLSJGByblZeZNovCUz3+Ni7rA9eOPIs2cncEOBhzDqea4yYZTzPpsjxVDu00b5djcI3Z4r4kcuOwggTW0KdtZzYAbsl0nkuuKFrDDRP33Kayo6jQfc0coOMeroeVusiizhgCrOu1GKot0Wlmk1SKwl4ovU/3iM0drWjjY2iq2EW9t9OBOBxae68VnjTfLhaqo6yZcuSjeJvfgIDZWddrX4vSy2OseKj2HWX37bvWECPbLDiFMO92GGY0eLLD6kOK0138n65LvDrVeB6rzcdHnsNunAAAAAElFTkSuQmCC"
            }
        ]
    },
    "dsfdsf00331": {
        "id": "004",
        "from": "Дима Грицан",
        "title": "Задача 4",
        "important": true,
        "starred": true,
        "completed": true,
        "tag": 002,
        "date_start": "2017-03-24T12:24:36.444Z",
        "date_end": "2017-04-29T01:00:00.000Z",
        "comment_cancel": "Потомушо нехачу",
        "sub_tasks": [
            {
                "id": "001",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "002",
                "title": "werwer",
                "complete": false
            },
            {
                "id": "003",
                "title": "werwer",
                "complete": false
            }
        ],
        "text": "werwerweqr",
        
        "items": [
            {
                "id": "002",
                "category": "GS Delivery",
                "title": "Векленко Владислава"
            },
            {
                "id": "001",
                "category": "GS Delivery",
                "title": "Ткаченко Антон"
            },
            {
                "id": "003",
                "category": "GS Delivery",
                "title": "Волотовская Дарья"
            }
        ],
        "files": [
            {
                "filetype": "image/png",
                "filename": "map-location — копия.png",
                "filesize": 1398,
                "base64": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYhcXYe4xdVRXH8c+UUqnQOVWkE1qQKSmC4h/GoCI0YJCqragRawxpUAgSoqhBsBrC4+wDqUYgojQGgsG/KqLiI6FRW2MBAR9BKCGl4KO2pbS0PILHopY++WPtO3N7e+feuTOd9JfcrPNY5+zv3Xvttdc+fSkl41FZJJiCU3BMPn4F/8DL3Z6v6s7tTx4n3Dx8FefgDW1cnsJduAP/H0sbYwIsizQFP8Bn8WI+/gu2YA+m4534BL6Dy7AQa3pta9JYALEsw92C4/Fl/BjP41U8gCV4Lz6Go7EKx004YFmk8/FpfLOq02LsxXWiJ9fir3gJv8RsLMc89OO2XtsbyxB/A+tQlUU6HPfhw/gtfobtOBOXZtiz8IQY6qtxkphAo1JPPVgWaVAM211VnXbi6xnuSszHDzPkFTgN+/ATHCYmCnymlzZ7HeL3ZXt/WaRJ+IqIrVvb+D6Nr+FUfBDP4p/iD04Y4Jxs12AQM3BvB/+fZ9uAWiuGeNTqFfAtUNXpVcN5b3sH/0bue2O2r2BqLw32CrgTyiL1YSN24OwO/nOzfSrbKT221zPgtmwHqjr9Dz/F58SEaNVUfBv/FqkGThApaMIA/5bt27O9Oje4Cl/CAI4Qee8hEXuXo87+c/SQYsYC+Fi2Z0JVpy35eC2WYquIu5ViEi3C3fmZQTGpHp0wwKpOW0U8ndt0eT3eL+JtMa4Vue7EJjhNz6yaMMCsB3B6WaQjm67twyNibV4iYvM/Lc+dI8qvJ3tpbGipK4s0HR/o4LsXD4qAv1wUAfeMsp2p+Dh+ld8zV05ZuZ5s1bNVnR7fDxBniAW+k64SsfYiLugB8DwcKYa8H39AXwf/5aID9gMczPZDGaCdnqnqtKss0r34fFmkY0WJ1U2XiNn+O+zCyRm4nb6PmY2TZsATsRurqjrt6dLgHfgCvihKrU46RRQUN2U4mlJNa8lfFunvWNA4b54kg9g0CjhVnZ7E7zPkUV3crxJ/fGnL9SvxaFmkh8si9Tdd34wZuWo/AHBDN7gm3SQq5Ss6+MzBxfgRnmu5N10k8I3YXRZpRr7e8Js1LsCqTitxvyipBkZw+5aYtanNvetxblWnRZiG58siLWwCnDkEWBbpKNEbowbMWpxffnObe/PERul7o3jvjszyNjHExF5nqAcHs/1XL3RVnR4Ts+5CUVE3NA13YhOqUbxqF34jZnkDcBbDs7gBuKEXwKxr8FFR7r9bpJ3b8zvni13eiCqL9A7sreq0oOnaTi0xOHscgNtFUXA0fiH2KYvEJulpvCf7DYh1Ook98+EiE6xxYIhs1tKDs0U3bxkDIPxZ7E9ux+li8sw0/Ifn4F24MZ+/gGdECCzBd9sAHt8MOCjWv70Nj7JIJ4il6VRcX9Wp2572YbECHYNPZqA/iRJtXf5NFROioYtG+DazWVRI+wFuaHGaJtbLu3Pj3XSD2F5eIvLbg/nXrB2tD42gTTi/LFJfM+DjjbtlkT6C1VWdzuj0lrxxv1TMvovz5XrkJ0atLSJGByblZeZNovCUz3+Ni7rA9eOPIs2cncEOBhzDqea4yYZTzPpsjxVDu00b5djcI3Z4r4kcuOwggTW0KdtZzYAbsl0nkuuKFrDDRP33Kayo6jQfc0coOMeroeVusiizhgCrOu1GKot0Wlmk1SKwl4ovU/3iM0drWjjY2iq2EW9t9OBOBxae68VnjTfLhaqo6yZcuSjeJvfgIDZWddrX4vSy2OseKj2HWX37bvWECPbLDiFMO92GGY0eLLD6kOK0138n65LvDrVeB6rzcdHnsNunAAAAAElFTkSuQmCC"
            }
        ]
    }
};
