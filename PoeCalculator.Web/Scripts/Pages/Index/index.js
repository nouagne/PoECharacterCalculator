$('document').ready(function ()
{
    var max_life;
    var baseStr = $('#Character_Strengh').val();
    var baseDex = $('#Character_Dexterity').val();
    var baseint = $('#Character_Intelligence').val();
    var lvl = $('#Character_Level').val();

    $('#stats').hide();
    $('#div-middle').hide();
    $('#div-right').hide();

    $('#Character_Level').blur(function () {
        lvl = $('#Character_Level').val();
        var str = $('#Character_Strengh').val();
        var lifePercent = $('#lifePercentBonus').val() != "" ? $('#lifePercentBonus').val() : 0;
        var lifeBonus = $('#flatLifeBonus').val() != "" ? $('#flatLifeBonus').val() : 0;
        if (lvl != "") {
            if (isNaN(lvl)) {
                alert('Enter a number');
                $('#Character_Level').val(1);
            }
            else {
                if (lvl % 1 != 0) {
                    alert('not int !');
                    $('#Character_Level').val(1);
                }
                else {
                    max_life = calculateMaxLife(lvl, str, lifePercent, lifeBonus);
                    parseInt($('#Character_Life').val(max_life));
                }
            }
        }
        else {
            alert('value must not be empty');
            $('#Character_Level').val(1);
        }
    });

    $('#Character_Strengh').blur(function () {
        var str = $('#Character_Strengh').val();
        var lifePercent = $('#lifePercentBonus').val() != "" ? $('#lifePercentBonus').val() : 0;
        var lifeBonus = $('#flatLifeBonus').val() != "" ? $('#flatLifeBonus').val() : 0;
        if (str != "") {
            if (isNaN(str)) {
                alert('Enter a number');
                $('#Character_Strengh').val(baseStr);
            }
            else {
                if (str % 1 != 0) {
                    alert('not int !');
                    $('#Character_Strengh').val(baseStr);
                }
                else {
                    max_life = calculateMaxLife(lvl,str,lifePercent,lifeBonus);
                    $('#Character_Life').val(max_life);
                }
            }
        }
        else
        {
            alert('value must not be empty');
            $('#Character_Strengh').val(baseStr);
        }
    });

    $('#lifePercentBonus').blur(function () {
        var lifePercent = $('#lifePercentBonus').val();
        var lifeBonus = $('#flatLifeBonus').val() != "" ? $('#flatLifeBonus').val() : 0;
        var str = $('#Character_Strengh').val();
        if (lifePercent != "") {
            if (isNaN(lifePercent)) {
                alert('Enter a number');
                $('#lifePercentBonus').val(0);
            }
            else {
                if (lifePercent % 1 != 0) {
                    alert('not int !');
                    $('#lifePercentBonus').val(0);
                }
                else {
                    max_life = calculateMaxLife(lvl, str, lifePercent, lifeBonus);
                    $('#Character_Life').val(max_life);
                }
            }
        }
        else {
            alert('value must not be empty');
            lifePercent = 0;
            max_life = calculateMaxLife(lvl, str, lifePercent, lifeBonus);
            $('#Character_Life').val(max_life);
            $('#lifePercentBonus').val(0);
        }
    });

    $('#flatLifeBonus').blur(function () {
        var lifePercent = $('#lifePercentBonus').val() != "" ? $('#lifePercentBonus').val() : 0;
        var lifeBonus = $('#flatLifeBonus').val();
        var str = $('#Character_Strengh').val();
        if (lifeBonus != "") {
            if (isNaN(lifeBonus)) {
                alert('Enter a number');
                $('#flatLifeBonus').val(0);
            }
            else {
                if (lifeBonus % 1 != 0) {
                    alert('not int !');
                    $('#flatLifeBonus').val(0);
                }
                else {
                    max_life = calculateMaxLife(lvl, str, lifePercent, lifeBonus);
                    $('#Character_Life').val(max_life);
                }
            }
        }
        else {
            alert('value must not be empty');
            lifeBonus = 0;
            max_life = calculateMaxLife(lvl, str, lifePercent, lifeBonus);
            $('#Character_Life').val(max_life);
            $('#flatLifeBonus').val(0)
        }
    });

    var calculateMaxLife = function (lvl, str, lifePercent, lifeBonus) {
        return (38 + (lvl * 12) + (str / 2) + parseInt(lifeBonus)) * (1 + lifePercent / 100);
    }


    $('#CharacterClass').change(function () {
        this.form.submit();
    });

    if($('#CharacterClass').val() != 0)
    {
        $('#stats').show();
        $('#div-middle').show();
        $('#div-right').show();
    }


});

