/*$('#formation').submit(function () {
    const fileData = $('#formFile').prop('files')[0];
    const formData = new FormData();

    formData.append('email', $('#email').val());
    formData.append('password', $('#pass').val());
    formData.append('radio', $('input[type="radio"]:checked').val());
    formData.append('file', fileData);
    formData.append('checkNew', $('input[id="check1"]:checked').val());
    formData.append('checkOff', $('input[id="check2"]:checked').val());
    formData.append('checkEl', $('input[id="check3"]:checked').val());

    console.log(formData);

    $.ajax({
            type: 'POST',
            url: 'post-json.php',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            success: function (msg) {
                $('#formation').hide('slow');
                console.log(msg);
                $('#server').append('<h4>Ваши данные:</h4>')
                $('#server').append('<p>Почта: ' + msg.email + '</p>');
                $('#server').append('<p>Пароль: ' + msg.password + '</p>');
                $('#server').append('<p>Ваш пол: ' + msg.radio + '</p>');
                if (msg.checkNew != undefined) {
                    $('#server').append('<p>checkNew отмечен</p>');
                }
                if (msg.checkOff != undefined) {
                    $('#server').append('<p>checkOff отмечен</p>');
                }
                if (msg.checkEl != undefined) {
                    $('#server').append('<p>checkEl отмечен</p>');
                }
                //$('#server').append('<img src="'+ msg.img +'"></p>');
                $('#server').append('<p>'+ msg.img +'</p>');
            },
            error: function () {
                console.log('Ошибка');
            }
        },
        'json'
    );
    return false;
});*/

$('#formation').submit(function () {
    //POST запрос
    /*$.post(

        //Еще победить: пикчи/файлы/даты
        'post-json.php',
        {
            email: $('#email').val(),
            password: $('#pass').val(),
            radio: $('input[type="radio"]:checked').val(),
            img: $('input[type="file"]').val(),
            checkNew: $('input[id="check1"]:checked').val(),
            checkOff: $('input[id="check2"]:checked').val(),
            checkEl: $('input[id="check3"]:checked').val(),
        },
        function (msg) {
            $('#formation').hide('slow');
            console.log(msg);
            $('#server').append('<h4>Ваши данные:</h4>')
            $('#server').append('<p>Почта: ' + msg.email + '</p>');
            $('#server').append('<p>Пароль: ' + msg.password + '</p>');
            $('#server').append('<p>Ваш пол: ' + msg.radio + '</p>');
            if (msg.checkNew != null){
                $('#server').append('<p>checkNew отмечен</p>');
            }
            if (msg.checkOff != null){
                $('#server').append('<p>checkOff отмечен</p>');
            }
            if (msg.checkEl != null){
                $('#server').append('<p>checkEl отмечен</p>');
            }
            $('#server').append('<p>Путь до картинки: ' + msg.img + '</p>');
            //$('#server').append('<img src="' + msg.img + '">');



    )*/
    $.ajax({
       type: 'POST',
       url: 'post-json.php',
       data: {
           email: $('#email').val(),
           password: $('#pass').val(),
           radio: $('input[type="radio"]:checked').val(),
           //img: $('input[type="file"]').val(),
           checkNew: $('input[id="check1"]:checked').val(),
           checkOff: $('input[id="check2"]:checked').val(),
           checkEl: $('input[id="check3"]:checked').val(),
       },
        success: function (msg) {
            $('#formation').hide('slow');
            console.log(msg);
            $('#server').append('<h4>Ваши данные:</h4>')
            $('#server').append('<p>Почта: ' + msg.email + '</p>');
            $('#server').append('<p>Пароль: ' + msg.password + '</p>');
            $('#server').append('<p>Ваш пол: ' + msg.radio + '</p>');
            if (msg.checkNew != null){
                $('#server').append('<p>checkNew отмечен</p>');
            }
            if (msg.checkOff != null){
                $('#server').append('<p>checkOff отмечен</p>');
            }
            if (msg.checkEl != null){
                $('#server').append('<p>checkEl отмечен</p>');
            }
        },
    },
        'json'
    )
    return false;
});

/*$('#button').click(function(){
 //POST запрос с непривязанной кнопкой
	$.post(
		'post-json.php',
		{
			first: $('#qwe').val(),
			second: $('#asd').val()
		},
		function(msg){
			console.log(msg);
			$('#server_json').html(msg.key1);
		},
		
		'json'
	);

	return false;
});*/