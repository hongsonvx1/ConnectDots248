var game;
var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
var gameRatio = innerWidth/innerHeight; 
var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
var game = new Phaser.Game(Math.floor(1080*gameRatio), 1080, Phaser.CANVAS);

var sound;

if(window.localStorage.getItem('issound'))
{
    var issound = window.localStorage.getItem('issound');
}else{
    var issound='on';
    window.localStorage.setItem('issound',issound);
}

var skins_array = [1,0,0,0,0];
// window.localStorage.setItem('skins_array',JSON.stringify(skins_array));
if(window.localStorage.getItem('skins_array'))
{
    skins_array = JSON.parse(window.localStorage.getItem('skins_array'));
}
var current_skins = 0;
if(window.localStorage.getItem('current_skins'))
{
    current_skins = window.localStorage.getItem('current_skins');
}

var no = 1;
var popup;
var shop_popup;
var Main = function(game){
};

Main.prototype = {
    
    preload : function() {
        game.load.image('main_background','objects/main_background.png');
        game.load.image('play','objects/play.png');
        game.load.spritesheet('sound_btn','objects/sound_btn.png',150,150);
        game.load.image('shop','objects/shop.png');
        game.load.image('rateus','objects/rateus.png');

        game.load.image('popup','objects/popup.png');
        game.load.image('popup1','objects/popup1.png');
        game.load.image('overlay','objects/overlay.png');
        game.load.image('close','objects/close.png');

        game.load.image('left_btn','objects/left_btn.png');
        game.load.image('right_btn','objects/right_btn.png');
        game.load.image('skins','objects/skins.png');
        game.load.image('energy','objects/energy.png');
        game.load.image('select_btn','objects/select_btn.png');
        game.load.image('buy_btn','objects/buy_btn.png');

        if(no==1)
        {
            game.load.audio('click','audio/click.mp3');
            game.load.audio('background','audio/background.mp3');
            game.load.audio('over','audio/over.wav');
            game.load.audio('complete','audio/complete.wav');

            game.load.audio('piano1','audio/piano 1.wav');
            game.load.audio('piano2','audio/piano 2.mp3');
            game.load.audio('piano3','audio/piano 3.mp3');
            game.load.audio('piano4','audio/piano 4.mp3');
            game.load.audio('piano5','audio/piano 5.mp3');
        }
    },
    create: function(){
        setscreen();
        // game.stage.backgroundColor = '#FFF';
        main_back = game.add.sprite(0,0,'main_background');
        main_back.width = game.width;
        main_back.height = game.height;

        piano_soundlist = ['piano1','piano2','piano3'];
        if(no==1)
        {
            no++;
            clicksound = game.add.audio('click');
            background_music = game.add.audio('background');
            background_music.play('', 0, 0.4,true);
            over_sound = game.add.audio('over');
            complete_sound = game.add.audio('complete');
        }


        play_btn = game.add.sprite(game.world.centerX,game.world.centerY,'play');
        play_btn.anchor.setTo(0.5);
        play_btn.inputEnabled = true;
        play_btn.events.onInputUp.add(function(){
            click_sound_play();
            game.state.start('Game');
        },this);

        sound = game.add.sprite(game.world.centerX-120,game.world.centerY+300,'sound_btn');
        sound.scale.setTo(0.60);
        sound.anchor.setTo(0.5,0)
        sound.inputEnabled = true;
        sound.events.onInputUp.add(soundchange,this);
        if(issound=='off')
        {
            background_music.stop();
            sound.frame = 1;
        }

        shop_btn = game.add.sprite(game.world.centerX,game.world.centerY+300,'shop');
        shop_btn.scale.setTo(0.60);
        shop_btn.anchor.setTo(0.5,0)
        shop_btn.inputEnabled = true;
        shop_btn.events.onInputUp.add(open_shop,this);

        rateus_btn = game.add.sprite(game.world.centerX+120,game.world.centerY+300,'rateus');
        rateus_btn.scale.setTo(0.60);
        rateus_btn.anchor.setTo(0.5,0);
        rateus_btn.inputEnabled = true;
        rateus_btn.events.onInputUp.add(rateus,this);

        shop_popup = game.add.group();
        // open_shop();
    },
    update: function(){
    }
};

game.state.add('Game', Game);
game.state.add('Main',Main);
game.state.start('Main');

function setscreen()
{
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize(true);
}

function open_shop()
{
    click_sound_play();
    shop_popup.destroy();
    shop_popup = game.add.group();

    overlay = game.add.image(0,0,'overlay');
    overlay.width = game.width;
    overlay.height = game.height;
    overlay.inputEnabled = true;
    shop_popup.add(overlay);

    popup_box = game.add.sprite(game.world.centerX,game.world.centerY,'popup');
    popup_box.anchor.setTo(0.5);
    popup_box.scale.setTo(1.1);
    popup_box.height = 700;
    shop_popup.add(popup_box);

    close_btn = game.add.sprite(popup_box.x+popup_box.width/2.5,250,'close');
    close_btn.anchor.setTo(0.5);
    close_btn.scale.setTo(0.5);
    close_btn.inputEnabled = true;
    close_btn.events.onInputUp.add(function(){
        click_sound_play();
        remove_shop();
    },this);
    shop_popup.add(close_btn);
    
    var style = { font: "bold 40px Arial", fill: "#6b6b68", boundsAlignH: "right", boundsAlignV: "right"};
    text = game.add.text(game.world.centerX,game.world.centerY-280,'SKINS',style);
    text.anchor.setTo(0.5);
    shop_popup.add(text);

    energy_icon = game.add.sprite(game.world.centerX-40,text.y+80,'energy');
    energy_icon.anchor.setTo(0.5);
    energy_icon.scale.setTo(0.5);
    shop_popup.add(energy_icon);

    energy_no = '0';
    if(window.localStorage.getItem('energy'))
    {
        energy_no = window.localStorage.getItem('energy');
        // energy_no = 350;
    }
    energy_is = game.add.text(energy_icon.x+25,energy_icon.y,energy_no,style);
    energy_is.anchor.setTo(0,0.5);
    shop_popup.add(energy_is);

    skins_list = game.add.tileSprite(game.world.centerX,game.world.centerY,230, 286, 'skins');
    skins_list.anchor.setTo(0.5);
    skins_list.tilePosition.x = -230*current_skins;
    // shop_popup.add(skins_list);

    select_btn = game.add.sprite(game.world.centerX,game.world.centerY+250,'select_btn');
    select_btn.anchor.setTo(0.5);
    select_btn.scale.setTo(0.7);
    select_btn.inputEnabled = true;
    select_btn.value = 'select';
    select_btn.index = Math.abs(skins_list.tilePosition.x/230);
    select_btn.events.onInputUp.add(function(){
        click_sound_play();
        if(select_btn.value=='buy')
        {
            skins_array[select_btn.index] = 1;
            energy_no -= 200;
            energy_is.text = energy_no;
            window.localStorage.setItem('energy',energy_no);
            select_btn.loadTexture('select_btn',0);
            select_btn.value = 'select';
            window.localStorage.setItem('skins_array',JSON.stringify(skins_array));
        }
        else{
            current_skins = select_btn.index;
            remove_shop();
            if(game.state.current=='Game')
            {
                change_skins();
            }
            popup = true;
        }
    },this);
    shop_popup.add(select_btn);

    if(Math.abs(skins_list.tilePosition.x/230)==current_skins)
    {
        select_btn.alpha = 0.5;
        select_btn.inputEnabled = false;
    }

    left_btn = game.add.sprite(game.world.centerX-170,game.world.centerY,'left_btn');
    left_btn.anchor.setTo(0.5);
    left_btn.scale.setTo(0.3);
    left_btn.inputEnabled = true;
    left_btn.events.onInputUp.add(function(){
        if(skins_list.tilePosition.x<0)
        {
            left_btn.inputEnabled  = false;
            right_btn.alpha = 1;
            skins_tween =  game.add.tween(skins_list.tilePosition);
            skins_tween.to({x:skins_list.tilePosition.x + 230}, 350, Phaser.Easing.Linear.In, true);
            skins_tween.onComplete.add(function(){
                skins_pos = Math.abs(skins_list.tilePosition.x/230);
                select_btn.index = skins_pos;
                if(skins_array[skins_pos]!=1)
                {
                    select_btn.loadTexture('buy_btn',0);
                    select_btn.alpha = 1;
                    select_btn.inputEnabled = true;
                    select_btn.value = 'buy';
                    if(energy_no<200)
                    {
                        select_btn.inputEnabled = false;
                        select_btn.alpha = 0.5;
                    }
                }else{
                    select_btn.loadTexture('select_btn',0);
                    select_btn.value = 'select';
                    if(skins_pos==current_skins)
                    {
                        select_btn.alpha = 0.5;
                        select_btn.inputEnabled = false;
                    }else{
                        select_btn.alpha = 1;
                        select_btn.inputEnabled = true;
                    }
                }
                left_btn.inputEnabled  = true;
                if(skins_list.tilePosition.x==0)
                {
                    left_btn.alpha = 0.5;
                }
            },this);
        }
    },this);
    shop_popup.add(left_btn);

    right_btn = game.add.sprite(game.world.centerX+170,game.world.centerY,'right_btn');
    right_btn.anchor.setTo(0.5);
    right_btn.scale.setTo(0.3);
    right_btn.inputEnabled = true;
    right_btn.events.onInputUp.add(function(){
        if(skins_list.tilePosition.x>-920)
        {
            right_btn.inputEnabled  = false;
            left_btn.alpha = 1;
            skins_tween =  game.add.tween(skins_list.tilePosition);
            skins_tween.to({x:skins_list.tilePosition.x - 230}, 350, Phaser.Easing.Linear.In, true);
            skins_tween.onComplete.add(function(){
                skins_pos = Math.abs(skins_list.tilePosition.x/230);
                select_btn.index = skins_pos;
                if(skins_array[skins_pos]!=1)
                {
                    select_btn.loadTexture('buy_btn',0);
                    select_btn.value = 'buy';
                    select_btn.alpha = 1;
                    select_btn.inputEnabled = true;
                    if(energy_no<200)
                    {
                        select_btn.inputEnabled = false;
                        select_btn.alpha = 0.5;
                    }
                }else{
                    select_btn.loadTexture('select_btn',0);
                    select_btn.value = 'select';
                    if(skins_pos==current_skins)
                    {
                        select_btn.alpha = 0.5;
                        select_btn.inputEnabled = false;
                    }else{
                        select_btn.alpha = 1;
                        select_btn.inputEnabled = true;
                    }
                }
                right_btn.inputEnabled  = true;
                if(skins_list.tilePosition.x==-920)
                {
                    right_btn.alpha = 0.5;
                }
            },this);
        }
    },this);
    shop_popup.add(right_btn);

    shop_popup.y += game.height;
    skins_list.y += game.height;

    tween = game.add.tween(skins_list);
    tween.to({y:game.world.centerY}, 400, Phaser.Easing.Quadratic.InOut,0);
    tween.start();

    tween = game.add.tween(shop_popup);
    tween.to({y:0}, 400, Phaser.Easing.Quadratic.InOut,0);
    tween.start();

    function remove_shop()
    {
        tween = game.add.tween(skins_list);
        tween.to({y:-game.height}, 400, Phaser.Easing.Quadratic.InOut,0);
        tween.start();

        tween = game.add.tween(shop_popup);
        tween.to({y:-game.height}, 400, Phaser.Easing.Quadratic.InOut,0);
        tween.onComplete.add(function(){
            skins_list.y -= game.height;
            shop_popup.y -= game.height;
            popup = true;
        },this);
        tween.start();
    }
}

function change_skins()
{
    if(current_skins==0)
    {
        backbox.alpha = 0;
    }else{
        backbox.alpha = 1;
    }
    window.localStorage.setItem('current_skins',current_skins);
    background.loadTexture('skin'+current_skins+'_background');
    background.width = game.width;
    background.height = game.height;
    for (var i = 0; i < tileGrid.length; i++)
    {
        for (var j = 0;j<tileGrid[i].length; j++)
        {
            var tile = tileGrid[i][j];
            if(current_skins==4)
            {
                tile.children[0].y = -15;
            }
            else{
                tile.children[0].y = 0;
            }
            tile.loadTexture('skin'+current_skins+'_'+tile.tileLetter);
        }
    }
}

function soundchange()
{
    click_sound_play();
    if(issound=='on')
    {
        background_music.stop();
        issound='off';
        sound.frame = 1;
        window.localStorage.setItem('issound',issound);
    }
    else{
        background_music.play('', 0, 0.4,true);
        issound='on';
        sound.frame = 0;
        window.localStorage.setItem('issound',issound);
    }   
}
function click_sound_play()
{
    if(issound=='on')
    {
        clicksound.play();
    }
}

function rateus()
{
    click_sound_play();
    AppRate.preferences.storeAppURL = {
      ios: '310633997',
      android: 'market://details?id=com.twofor.game'
    };
    AppRate.promptForRating();
}
function doFadeIn(pGame, bFadeIn) {
    
    var alphaFrom = 0.0;
    var alphaGoal = 1.0;
    if (bFadeIn==true) {
        alphaFrom = 1.0;
        alphaGoal = 0.0;
    }
    // set black box
    var blackbox = pGame.add.graphics(0, 0);
    blackbox.beginFill(0x000000, 1.0);
    blackbox.drawRect(0, 0,10000, 10000);
    blackbox.alpha = alphaFrom;
    
    $('body').css({ "background": "#000", "transition": "background 500ms linear"});

    var tw = pGame.add.tween(blackbox);
    tw.to( { alpha: alphaGoal}, 500, Phaser.Easing.Linear.None, true);
    
    tw.onComplete.add(function () {
        blackbox.alpha = alphaFrom;
        var alphaFrom = 1.0;
        alphaGoal = 0.0;
        var tw = pGame.add.tween(blackbox);
        tw.to( { alpha: alphaGoal}, 600, Phaser.Easing.Linear.None, true);
    });
    return tw;
}
