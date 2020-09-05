var Game = function(game){
};

Game.prototype = {
    preload: function(){
        game.load.image('skin0_2','objects/skin0_2.png');
        game.load.image('skin0_4','objects/skin0_4.png');
        game.load.image('skin0_8','objects/skin0_8.png');
        game.load.image('skin0_16','objects/skin0_16.png');
        game.load.image('skin0_32','objects/skin0_32.png');
        game.load.image('skin0_64','objects/skin0_64.png');
        game.load.image('skin0_128','objects/skin0_128.png');
        game.load.image('skin0_256','objects/skin0_256.png');
        game.load.image('skin0_512','objects/skin0_512.png');

        game.load.image('skin1_2','objects/skin1_2.png');
        game.load.image('skin1_4','objects/skin1_4.png');
        game.load.image('skin1_8','objects/skin1_8.png');
        game.load.image('skin1_16','objects/skin1_16.png');
        game.load.image('skin1_32','objects/skin1_32.png');
        game.load.image('skin1_64','objects/skin1_64.png');
        game.load.image('skin1_128','objects/skin1_128.png');
        game.load.image('skin1_256','objects/skin1_256.png');
        game.load.image('skin1_512','objects/skin1_512.png');

        game.load.image('skin2_2','objects/skin2_2.png');
        game.load.image('skin2_4','objects/skin2_4.png');
        game.load.image('skin2_8','objects/skin2_8.png');
        game.load.image('skin2_16','objects/skin2_16.png');
        game.load.image('skin2_32','objects/skin2_32.png');
        game.load.image('skin2_64','objects/skin2_64.png');
        game.load.image('skin2_128','objects/skin2_128.png');
        game.load.image('skin2_256','objects/skin2_256.png');
        game.load.image('skin2_512','objects/skin2_512.png');

        game.load.image('skin3_2','objects/skin3_2.png');
        game.load.image('skin3_4','objects/skin3_4.png');
        game.load.image('skin3_8','objects/skin3_8.png');
        game.load.image('skin3_16','objects/skin3_16.png');
        game.load.image('skin3_32','objects/skin3_32.png');
        game.load.image('skin3_64','objects/skin3_64.png');
        game.load.image('skin3_128','objects/skin3_128.png');
        game.load.image('skin3_256','objects/skin3_256.png');
        game.load.image('skin3_512','objects/skin3_512.png');

        game.load.image('skin4_2','objects/skin4_2.png');
        game.load.image('skin4_4','objects/skin4_4.png');
        game.load.image('skin4_8','objects/skin4_8.png');
        game.load.image('skin4_16','objects/skin4_16.png');
        game.load.image('skin4_32','objects/skin4_32.png');
        game.load.image('skin4_64','objects/skin4_64.png');
        game.load.image('skin4_128','objects/skin4_128.png');
        game.load.image('skin4_256','objects/skin4_256.png');
        game.load.image('skin4_512','objects/skin4_512.png');
        
        game.load.image('skin0_background','objects/skin0_background.png');
        game.load.image('skin1_background','objects/skin1_background.png');
        game.load.image('skin2_background','objects/skin2_background.png');
        game.load.image('skin3_background','objects/skin3_background.png');
        game.load.image('skin4_background','objects/skin4_background.png');

        game.load.image('label','objects/label.png');
        game.load.image('energy','objects/energy.png');

        game.load.image('home','objects/home.png');
        game.load.image('retry','objects/retry.png');
        game.load.image('back','objects/back.png');
        game.load.image('menu','objects/menu.png');
        game.load.image('resume','objects/resume.png');
        game.load.image('allskins','objects/skins.png');
    },
    create: function() {
        setscreen();
        var me = this;

        // me.game.stage.backgroundColor = "FFF";
        background = game.add.sprite(0,0,'skin'+current_skins+'_background');
        background.width = game.width;
        background.height = game.height;
        
        me.score = '0';
        var style = { font: "bold 40px Arial", fill: "#6b6b68", boundsAlignH: "right", boundsAlignV: "right"};
        score_text = game.add.text(game.width-50,50,me.score,style);
        score_text.anchor.setTo(0.5,0.5);
        score_text.x -= score_text.width;

        me.bestscore = '0';
        if(window.localStorage.getItem('bestscore'))
        {
            me.bestscore = window.localStorage.getItem('bestscore');
        }

        var style = { font: "bold 25px Arial", fill: "#6b6b68", boundsAlignH: "right", boundsAlignV: "right"};
        best_text = game.add.text(game.width-40,80,'BEST',style);
        best_text.x -= best_text.width;

        var style = { font: "bold 35px Arial", fill: "#6b6b68", boundsAlignH: "right", boundsAlignV: "right"};
        bestscore_text = game.add.text(game.width-40,135,me.bestscore,style);
        bestscore_text.anchor.setTo(0,0.5);
        bestscore_text.x -= bestscore_text.width;

        max_number = 0;

        label = game.add.sprite(game.world.centerX,80,'label');
        label.scale.setTo(0.35);
        label.anchor.setTo(0.5);

        var style = { font: "bold 50px Arial", fill: "#e05664", boundsAlignH: "right", boundsAlignV: "right"};
        high_number =game.add.text(game.world.centerX,75,max_number,style);
        high_number.anchor.setTo(0.5);

        energy = game.add.sprite(30,30,'energy');
        energy.scale.setTo(0.5);

        me.energy_count = '0';
        if(window.localStorage.getItem('energy'))
        {
            me.energy_count = window.localStorage.getItem('energy');
        }
        
        var style = { font: "bold 45px Arial", fill: "#6b6b68", boundsAlignH: "right", boundsAlignV: "right"};
        energy_text = game.add.text(energy.x+35,energy.y-5,me.energy_count,style);

        back_btn = game.add.sprite(game.world.centerX-100,game.height-150,'back');
        back_btn.anchor.setTo(0.5);
        back_btn.scale.setTo(0.60);
        back_btn.inputEnabled = true;
        back_btn.events.onInputUp.add(function(){
            click_sound_play();
            game.state.start('Main');
        },this);

        menu_btn = game.add.sprite(game.world.centerX+100,game.height-150,'menu');
        menu_btn.anchor.setTo(0.5);
        menu_btn.scale.setTo(0.60);
        menu_btn.inputEnabled = true;
        menu_btn.events.onInputUp.add(me.openmenu,this);

        me.guessing = false;
        me.isvalid = false;
        me.currentWord = [];
        me.correctWords = [];
        me.lines = [];

        //Declare assets that will be used as tiles
        me.tileLetters = [2,4,8];

        //What colours will be used for our tiles?
        me.tileColors = [
            '#ffffff'
        ];

        me.colous = [
            [2,'0xf36573'],
            [4,'0xf6ce23'],
            [8,'0x85a3f8'],
            [16,'0x45d5b3'],
            [32,'0xf595c2'],
            [64,'0xad83fd'],
            [128,'0xf29c7f'],
            [256,'0x4ac7e3'],
            [512,'0xa1da73']
        ];

        //Set the width and height for the tiles
        rect_size = 110;
        me.tileWidth = rect_size;
        me.tileHeight = rect_size;
        

        //A buffer for how much of the tile activates a select
        me.selectBuffer = me.tileWidth / 6;

        

        tileGrid = [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null]
        ];

        me.boardWidth = tileGrid[0].length * me.tileWidth;
        me.boardHeight = tileGrid.length  * me.tileHeight;
        
        me.leftBuffer = (me.game.width - me.boardWidth) / 2;
        me.topBuffer = (me.game.height - me.boardHeight) / 2;

        backbox = game.add.graphics(me.leftBuffer,me.topBuffer);
        backbox.beginFill(0xfff0ae, 1.0);
        backbox.drawRoundedRect(0, 0,me.boardWidth ,me.boardHeight, 12);
        // blackbox.alpha = 0.5;
        backbox.inputEnabled = true;
        if(current_skins==0)
        {
            backbox.alpha = 0;  
        }

        me.tiles = me.game.add.group();
        me.initTiles();
    
        me.get_max_number();    

        hoverPosX1='';
        hoverPosX2='';

        hoverPosY1='';
        hoverPosY2='';

        me.selectChar = '';
        me.box_index = 0;
        me.isswipe = false;
        me.swipeCoordX,me.swipeCoordY,me.swipeCoordX2,me.swipeCoordY2,me.swipeMinDistance = 35;    
        me.isdirection = '';
        me.lastHoverX='';
        me.lastHoverY='';
        me.graphics = '';
        linecolor='';
        popup = true;
        me.game.input.onDown.add(function(pointer){ 
            me.guessing = true;
            me.isvalid = true;
            me.selectChar='';
            me.box_index=-1;
            me.swipeCoordX = pointer.clientX;
            me.swipeCoordY = pointer.clientY;
            me.isswipe  = true;
            me.isdirection = '';
            me.isdraw = true;
            me.graphics='';
            me.xpos = 0;
            me.ypos = 0;
            me.isdraw1 = false;
        }, me);
        me.game.input.onUp.add(function(){me.guessing = false;me.isswipe  = false;}, me);

        me.gameover = true;
        // me.game_over();
        gameshop_popup = game.add.group();
        // me.create_shop();
    },
    update: function() {
        var me = this;
        if(me.guessing && popup){

            //Get the location of where the pointer is currently
            var hoverX = me.game.input.x;
            var hoverY = me.game.input.y;
            // console.log(hoverX,':',hoverY);
            var hoverPosX = Math.floor((hoverX - me.leftBuffer)/me.tileWidth);
            var hoverPosY = Math.floor((hoverY - me.topBuffer)/me.tileHeight);
            // console.log(hoverPosX,':',hoverPosY);
            
            if(me.isvalid)
            {
                me.isvalid =false;
                hoverPosX1 = hoverPosX-1;
                hoverPosX2 = hoverPosX+1;
                hoverPosY1 = hoverPosY-1;
                hoverPosY2 = hoverPosY+1;

                hoverPosX3 = hoverPosX;
                hoverPosX4 = hoverPosX+2;
                hoverPosX5 = hoverPosX-2;

                hoverPosY3 = hoverPosY-2;
                hoverPosY4 = hoverPosY;
                hoverPosY5 = hoverPosY+2;
            }
            
            //Check that we are within the game bounds
            if(hoverPosX >= 0 && hoverPosX < tileGrid[0].length && hoverPosY >= 0 && hoverPosY < tileGrid.length){

                //Grab the tile being hovered over
                var hoverTile = tileGrid[hoverPosX][hoverPosY];

                me.swipeCoordX2 = me.game.input.activePointer.clientX;
                me.swipeCoordY2 = me.game.input.activePointer.clientY;

                if(!me.isdraw)
                {
                    // console.log('Xpos :-',me.xpos,'-',me.game.input.x-me.xpos);
                    // console.log('Ypos :-',me.ypos,'-',me.game.input.y-me.ypos);
                    me.last_xpos = hoverPosX;
                    me.last_ypos = hoverPosY;
                    /*x_pos = me.game.input.x-me.xpos;
                    y_pos = me.game.input.y-me.ypos;*/
                    x_pos = hoverTile.x - me.xpos;
                    y_pos = hoverTile.y - me.ypos;
                    
                    if(me.swipeCoordX2 < me.swipeCoordX - me.swipeMinDistance){
                        me.graphics.graphicsData[0].shape._points[2] = x_pos;
                        me.graphics.graphicsData[0].shape._points[3] = 25;
                    }
                    else if(me.swipeCoordX2 > me.swipeCoordX + me.swipeMinDistance){
                        me.graphics.graphicsData[0].shape._points[2] = x_pos;
                        me.graphics.graphicsData[0].shape._points[3] = 25;
                    }
                    else if(me.swipeCoordY2 < me.swipeCoordY - me.swipeMinDistance)
                    {
                        me.graphics.graphicsData[0].shape._points[2] = 25;
                        me.graphics.graphicsData[0].shape._points[3] = y_pos;
                    }
                    else if(me.swipeCoordY2 > me.swipeCoordY + me.swipeMinDistance){
                        me.graphics.graphicsData[0].shape._points[2] = 25;
                        me.graphics.graphicsData[0].shape._points[3] = y_pos;
                    }
                    game.world.bringToTop(me.tiles);
                }

                if(me.isdraw1)
                {
                    x_pos = me.game.input.x-me.xpos
                    y_pos = me.game.input.y-me.ypos-120;
                    var left_right = false;
                    var top_bottom = false;

                    if(me.isdirection=='right')
                    {
                        left_right = true;
                        x_pos = me.game.input.x-me.xpos+120;
                    }
                    else if(me.isdirection=='left')
                    {
                        left_right = true;
                        x_pos = me.game.input.x-me.xpos-120;
                    }
                    if(left_right)
                    {
                        if(me.swipeCoordX2- me.swipeMinDistance < me.swipeCoordX ){
                            me.graphics.graphicsData[0].shape._points[2] = x_pos;
                            me.graphics.graphicsData[0].shape._points[3] = 25;
                        }
                        else if(me.swipeCoordX2 > me.swipeCoordX + me.swipeMinDistance){
                            me.graphics.graphicsData[0].shape._points[2] = x_pos;
                            me.graphics.graphicsData[0].shape._points[3] = 25;
                        }
                    }
                
                    if(me.isdirection=='top')
                    {
                        top_bottom = true;
                        y_pos = me.game.input.y-me.ypos-120
                    }else if(me.isdirection=='bottom')
                    {
                        top_bottom = true;
                        y_pos = me.game.input.y-me.ypos+120
                    }
                    if(top_bottom)
                    {
                        if(me.swipeCoordY2 - me.swipeMinDistance < me.swipeCoordY)
                        {
                            me.graphics.graphicsData[0].shape._points[2] = 25;
                            me.graphics.graphicsData[0].shape._points[3] = y_pos;
                        }
                        else if(me.swipeCoordY2 > me.swipeCoordY + me.swipeMinDistance){
                            me.graphics.graphicsData[0].shape._points[2] = 25;
                            me.graphics.graphicsData[0].shape._points[3] = y_pos;
                        }    
                    }
                    game.world.bringToTop(me.tiles);
                }

                if(me.swipeCoordX2 < me.swipeCoordX - me.swipeMinDistance){
                    // console.log('swipe left');
                    /*graphics.graphicsData[0].shape._points[2] = x_pos;
                    graphics.graphicsData[0].shape._points[3] = 25;*/
                    if(me.isdirection=='')
                    {
                        me.isdirection='left';
                    }else if(me.isdirection!='left' && hoverTile.isActive){

                        if(me.lastHoverX!=hoverPosX || me.lastHoverY!=hoverPosY)
                        {
                            if(me.currentWord.length>1)
                            {
                                me.lastHoverX--;
                                /*console.log('current Hover tile pos:-',me.lastHoverX,':',me.lastHoverY);
                                console.log(hoverPosX,':',hoverPosY,'Index:-',me.box_index);*/
                                var newarray = [];
                                for(var i=0;i<me.currentWord.length;i++)
                                {
                                    if(i!=me.box_index)
                                    {
                                        newarray.push(me.currentWord[i]);
                                    }
                                    else{
                                        me.currentWord[i].isActive = false;
                                        
                                        // me.lines[me.lines.length-1].destroy();
                                        // graphics = me.lines[i-1];
                                        reset_line();
                                        me.box_index--;
                                    }
                                }
                                me.currentWord = newarray;
                            }
                        }
                    }
                }
                else if(me.swipeCoordX2 > me.swipeCoordX + me.swipeMinDistance){
                    // console.log('swipe right');
                    /*graphics.graphicsData[0].shape._points[2] = x_pos;
                    graphics.graphicsData[0].shape._points[3] = 25;*/
                    if(me.isdirection=='')
                    {
                        me.isdirection='right';
                    }else if(me.isdirection!='right' && hoverTile.isActive){
                        if(me.lastHoverX!=hoverPosX || me.lastHoverY!=hoverPosY)
                        {
                            if(me.currentWord.length>1)
                            {
                                me.lastHoverX++;
                                var newarray = [];
                                for(var i=0;i<me.currentWord.length;i++)
                                {
                                    if(i!=me.box_index)
                                    {
                                        newarray.push(me.currentWord[i]);
                                    }
                                    else{
                                        me.currentWord[i].isActive = false;
                                        me.box_index--;
                                        reset_line();
                                    }
                                }
                                me.currentWord = newarray;
                            }
                        }
                    }
                }
                else if(me.swipeCoordY2 < me.swipeCoordY - me.swipeMinDistance){
                    // console.log('swipe Top');
                    /*graphics.graphicsData[0].shape._points[2] = x_pos;
                    graphics.graphicsData[0].shape._points[3] = y_pos;*/
                    if(me.isdirection=='')
                    {
                        me.isdirection='top';
                    }else if(me.isdirection!='top' && hoverTile.isActive){
                        if(me.lastHoverX!=hoverPosX || me.lastHoverY!=hoverPosY)
                        {
                            if(me.currentWord.length>1)
                            {
                                me.lastHoverY--;
                                var newarray = [];
                                for(var i=0;i<me.currentWord.length;i++)
                                {
                                    if(i!=me.box_index)
                                    {
                                        newarray.push(me.currentWord[i]);
                                    }
                                    else{
                                        me.currentWord[i].isActive = false;
                                        me.box_index--;
                                        reset_line();
                                    }
                                }
                                me.currentWord = newarray;
                            }
                        }
                    }
                }
                else if(me.swipeCoordY2 > me.swipeCoordY + me.swipeMinDistance){
                    // console.log('swipe bottom');
                    /*graphics.graphicsData[0].shape._points[2] = x_pos;
                    graphics.graphicsData[0].shape._points[3] = y_pos;*/
                    if(me.isdirection=='')
                    {
                        me.isdirection='bottom';
                    }else if(me.isdirection!='bottom' && hoverTile.isActive){
                        if(me.lastHoverX!=hoverPosX || me.lastHoverY!=hoverPosY)
                        {
                            if(me.currentWord.length>1)
                            {
                                me.lastHoverY++;
                                var newarray = [];
                                for(var i=0;i<me.currentWord.length;i++)
                                {
                                    if(i!=me.box_index)
                                    {
                                        newarray.push(me.currentWord[i]);
                                    }
                                    else{
                                        me.currentWord[i].isActive = false;
                                        me.box_index--;
                                        reset_line();
                                    }
                                }
                                me.currentWord = newarray;
                            }
                        }
                    }
                }

                function reset_line()
                {
                    if(issound=='on')
                    {
                        
                        piano_sound = game.add.audio(piano_soundlist[me.rnd.integerInRange(0, piano_soundlist.length - 1)]);
                        piano_sound.play();
                        // over_sound.play();    
                    }
                    var newlines = [];
                    me.lines[me.lines.length-1].destroy();
                    for(var i=0;i<me.lines.length-1;i++)
                    {
                        newlines.push(me.lines[i]);
                    }
                    me.lines = [];
                    me.lines = newlines;
                    
                    me.graphics = me.lines[me.lines.length-1];
                    me.isdraw1 = true;
                    me.isdraw = true;
                }

                if(me.currentWord.length==0)
                {
                    me.selectChar = hoverTile.tileLetter;
                }
                
                var tileLeftPosition = me.leftBuffer + (hoverPosX * me.tileWidth);
                var tileRightPosition = me.leftBuffer + (hoverPosX * me.tileWidth) + me.tileWidth;
                var tileTopPosition = me.topBuffer + (hoverPosY * me.tileHeight);
                var tileBottomPosition = me.topBuffer + (hoverPosY * me.tileHeight) + me.tileHeight;

                if(!hoverTile.isActive && hoverX > tileLeftPosition + me.selectBuffer && hoverX < tileRightPosition - me.selectBuffer 
                    && hoverY > tileTopPosition + me.selectBuffer && hoverY < tileBottomPosition - me.selectBuffer && me.selectChar==hoverTile.tileLetter){
                    
                    /*console.log('Not Allow 1 =>',hoverPosX3,':',hoverPosY3);
                    console.log('Not Allow 2 =>',hoverPosX4,':',hoverPosY4);
                    console.log('Not Allow 3 =>',hoverPosX3,':',hoverPosY5);
                    console.log('Not Allow 4 =>',hoverPosX5,':',hoverPosY4);*/

                    if(hoverPosX1==hoverPosX && hoverPosY1==hoverPosY){}
                    else if(hoverPosX2==hoverPosX && hoverPosY1==hoverPosY){}
                    else if(hoverPosX1==hoverPosX && hoverPosY2==hoverPosY){}
                    else if(hoverPosX2==hoverPosX && hoverPosY2==hoverPosY){}

                    else if(hoverPosX3==hoverPosX && hoverPosY3==hoverPosY){}
                    else if(hoverPosX4==hoverPosX && hoverPosY4==hoverPosY){}
                    else if(hoverPosX3==hoverPosX && hoverPosY5==hoverPosY){}
                    else if(hoverPosX5==hoverPosX && hoverPosY4==hoverPosY){}

                    else{
                        // console.log(me.box_index);
                        if(issound=='on' && me.box_index!=-1)
                        {
                            piano_sound = game.add.audio(piano_soundlist[me.rnd.integerInRange(0, piano_soundlist.length - 1)]);
                            piano_sound.play();
                            // over_sound.play();    
                        }
                        me.isdraw1 = false;
                        me.isdraw = true;
                        
                        me.lastHoverX = hoverPosX;
                        me.lastHoverY = hoverPosY;

                        me.swipeCoordX = me.game.input.activePointer.clientX;
                        me.swipeCoordY = me.game.input.activePointer.clientY;

                        hoverPosX1 = hoverPosX-1;
                        hoverPosX2 = hoverPosX+1;
                        hoverPosY1 = hoverPosY-1;
                        hoverPosY2 = hoverPosY+1;

                        hoverPosX3 = hoverPosX;
                        hoverPosX4 = hoverPosX+2;
                        hoverPosX5 = hoverPosX-2;

                        hoverPosY3 = hoverPosY-2;
                        hoverPosY4 = hoverPosY;
                        hoverPosY5 = hoverPosY+2;
                        
                        // hoverTile.tint = me.select_color;
                        hoverTile.isActive = true;
                        if(me.isdraw)
                        {
                            for(var i=0;i<me.colous.length;i++)
                            {
                                if(me.colous[i][0]==hoverTile.tileLetter)
                                {
                                    linecolor = me.colous[i][1];
                                }
                            }
                            me.xpos = hoverTile.x-25;
                            me.ypos = hoverTile.y-25;
                            me.graphics = game.add.graphics(me.xpos, me.ypos);

                            me.graphics.lineStyle(25, linecolor);
                            me.graphics.moveTo(25,25);
                            me.graphics.lineTo(25, 25);
                            me.graphics.mass = 1;
                            // graphics.alpha = 0.6;
                            // hoverTile.addChild(me.graphics);
                            me.isdraw = false;
                            me.lines.push(me.graphics);
                        }
                        me.box_index++;
                        me.currentWord.push(hoverTile);
                        // console.log(me.currentWord);
                    }
                }
            }
        }
        else {

            if(me.currentWord.length > 0){

                var guessedWord = '';
                for(var i=0; i < me.currentWord.length; i++){
                    // guessedWord += me.currentWord[i].tileLetter;
                    me.currentWord[i].isActive = false;
                }

                for(var i = 0; i < me.currentWord.length-1; i++){
                    var tile = me.currentWord[i];
                    var tilePos = me.getTilePos(tileGrid, tile);
                    if(tile.isenergy)
                    {
                        var fek_energy = game.add.sprite(tile.x,tile.y,'energy');
                        fek_energy.scale.setTo(0.5);
                        
                        var energy_tween = game.add.tween(fek_energy).to({x:energy.x,y:energy.y}, 350, Phaser.Easing.Linear.In, true);
                        energy_tween.onComplete.add(function(fek_energy){
                            fek_energy.destroy();
                        },this);

                        if(me.energy_count=='0')
                        {
                            me.energy_count = 0;
                        }
                        me.energy_count++;
                    }
                    me.tiles.remove(tile);

                    if(tilePos.x != -1 && tilePos.y != -1){
                        tileGrid[tilePos.x][tilePos.y] = null;
                    }
                }
                for(var i=0;i<me.lines.length;i++)
                {
                    me.lines[i].destroy();
                }
                if(me.currentWord.length>1)
                {
                    if(issound=='on')
                    {
                        complete_sound.play();
                    }
                    change_tile = me.currentWord[me.currentWord.length-1];
                    if(change_tile.isenergy)
                    {
                        var fek_energy = game.add.sprite(tile.x,tile.y,'energy');
                        fek_energy.scale.setTo(0.5);
                        
                        var energy_tween = game.add.tween(fek_energy).to({x:energy.x,y:energy.y}, 350, Phaser.Easing.Linear.In, true);
                        energy_tween.onComplete.add(function(fek_energy){
                            fek_energy.destroy();
                        },this);
                        if(me.energy_count=='0')
                        {
                            me.energy_count = 0;
                        }
                        me.energy_count++;
                        change_tile.children[1].destroy();   
                        change_tile.isenergy = false;
                    }
                    if(me.currentWord.length>=4)
                    {
                        var letter = change_tile.tileLetter*4;
                    }
                    else{var letter = change_tile.tileLetter*2;}

                    change_tile.children[0].text = letter;
                    if(change_tile.children[0].text.length>2)
                    {
                        change_tile.children[0].scale.setTo(0.8);
                    }
                    change_tile.tileLetter = letter;
                    change_tile.loadTexture('skin'+current_skins+'_'+change_tile.tileLetter,0);
                }
                if(letter)
                {
                    if(me.score=='0')
                    {
                        me.score = letter;
                    }else{me.score += letter;}    
                }
                
                energy_text.text = me.energy_count;
                window.localStorage.setItem('energy',me.energy_count);
                score_text.text = me.score;
                // console.log('selected word:-',guessedWord);
                me.resetTile();
                me.fillTile();
                me.currentWord = [];
                me.get_max_number();

                me.gameover = true;
                for (var i = 0;i < tileGrid.length; i++)
                {
                    for (var j = 0;j < tileGrid[i].length;j++)
                    {
                        value = tileGrid[i][j].tileLetter;
                        if(i>0)
                        {
                            if(tileGrid[i-1][j])
                            {
                                if(value==tileGrid[i-1][j].tileLetter)
                                {
                                    me.gameover = false;
                                }
                                // console.log('Left :-',me.tileGrid[i-1][j].tileLetter);
                            }    
                        }
                        if(i<4)
                        {
                            if(tileGrid[i+1][j])
                            {
                                if(value==tileGrid[i+1][j].tileLetter)
                                {
                                    me.gameover = false;
                                }
                                // console.log('Right :-',me.tileGrid[i+1][j].tileLetter);
                            }
                        }
                        
                        if(tileGrid[i][j-1])
                        {
                            if(value==tileGrid[i][j-1].tileLetter)
                            {
                                me.gameover = false;
                            }
                            // console.log('Top :-',me.tileGrid[i][j-1].tileLetter);
                        }
                        if(tileGrid[i][j+1])
                        {
                            if(value==tileGrid[i][j+1].tileLetter)
                            {
                                me.gameover = false;
                            }
                            // console.log('Bottom :-',tileGrid[i][j+1].tileLetter);
                        }
                    }
                }

                if(me.gameover)
                {
                    if(me.bestscore<me.score)
                    {
                        window.localStorage.setItem('bestscore',me.score);
                    }
                    game.input.onDown.removeAll();
                    setTimeout(function(){
                        me.game_over();
                    },1500);
                }
            }
        }
    },
    initTiles: function(){

        var me = this;

        //Loop through each column in the grid
        for(var i = 0; i < tileGrid.length; i++){

            for(var j = 0; j < tileGrid.length; j++){
                
                var tile = me.addTile(i, j);
                tileGrid[i][j] = tile;
                // console.log(i,j,':',me.tileGrid[i][j]);
            }
        }
    },
    addTile: function(x, y){

        var me = this;
        //Choose a random tile to add
        if(tileGrid[x][y])
        {
            var tileLetter = tileGrid[x][y];
        }
        else{
            var tileLetter = me.tileLetters[me.rnd.integerInRange(0, me.tileLetters.length - 1)];
            // var tileLetter = '';
        }

        var energy_list = [false,false,false,false,false,true,false,false];
        
        var tileColor = me.tileColors[me.rnd.integerInRange(0, me.tileColors.length - 1)];
        // var tileToAdd = me.createTile(tileLetter, tileColor);   

        // var tileToAdd = game.add.sprite(0, 0, tileLetter); 
        // var text = game.add.text(0, 0, "Some text", {font: "16px Arial", fill: "#ffffff"});
        // sprite.addChild(text);

        // var tile = me.tiles.create(me.leftBuffer + (x * rect_size) + rect_size / 2, 0, tileToAdd);
        
        var tile = me.tiles.create(me.leftBuffer+(x * me.tileWidth) + me.tileWidth / 2, 0, 'skin'+current_skins+'_'+tileLetter);
        // var tile = me.tiles.create((x * me.tileWidth) + me.tileWidth / 2, 0, tileToAdd);
        if(current_skins==4)
        {
            var text = game.add.text(0,-15, tileLetter, {font: "Bold 70px Arial", fill: "#ffffff",textAlign:'center'});
        }
        else{
            var text = game.add.text(0,0, tileLetter, {font: "Bold 70px Arial", fill: "#ffffff",textAlign:'center'});   
        }
        text.anchor.setTo(0.5, 0.5);
        tile.addChild(text);

        isenergy = energy_list[me.rnd.integerInRange(0, energy_list.length - 1)];
        if(isenergy)
        {
            energy_set = game.add.sprite(50,-70,'energy');
            energy_set.scale.setTo(0.5);
            tile.isenergy = true;
            tile.addChild(energy_set);
        }else{
            tile.isenergy = false;
        }


        me.game.add.tween(tile).to({y:me.topBuffer + (y*me.tileHeight+(me.tileHeight/2))}, 500, Phaser.Easing.Linear.In, true)

        //Set the tiles anchor point to the center
        tile.anchor.setTo(0.5, 0.5);
        tile.scale.setTo(0.60);

        tile.tileLetter = tileLetter;

        return tile;
    },
    createTile: function(letter, color){

        var me = this;

        var tile = me.game.add.bitmapData(rect_size, rect_size);

        tile.ctx.rect(5, 5, rect_size - 5, rect_size - 5);
        
        if(letter==2)
        {
            tile.ctx.fillStyle = '#f44959';
        }
        else if(letter==4)
        {
            tile.ctx.fillStyle = '#fdb518';
        }
        else if(letter==8)
        {
            tile.ctx.fillStyle = '#447dfc';   
        }
        // tile.ctx.fillStyle = color;
        tile.ctx.fill();
        tile.ctx.createRadialGradient(32, 32, 4, 32, 32, 32);

        tile.ctx.font = 'Bold 50px Arial';
        tile.ctx.textAlign = 'center';
        tile.ctx.textBaseline = 'middle';
        tile.ctx.fillStyle = '#fff';
        if(color == '#ffffff'){
            tile.ctx.fillStyle = '#FFF';
        }
        tile.ctx.fillText(letter, rect_size / 2, rect_size / 2);

        return tile;
    },
    getTilePos: function(tileGrid, tile)
    {
        var pos = {x:-1, y:-1};
        for(var i = 0; i < tileGrid.length ; i++)
        {
            for(var j = 0; j < tileGrid[i].length; j++)
            {
                if(tile == tileGrid[i][j])
                {
                    pos.x = i;
                    pos.y = j;
                    break;
                }
            }
        }
        return pos;
    },
    resetTile: function(){
        var me = this;

        //Loop through each column starting from the left
        for (var i = 0; i < tileGrid.length; i++)
        {
            //Loop through each tile in column from bottom to top
            for (var j = tileGrid[i].length - 1; j > 0; j--)
            {
                //If this space is blank, but the one above it is not, move the one above down
                if(tileGrid[i][j] == null && tileGrid[i][j-1] != null)
                {
                    //Move the tile above down one
                    var tempTile = tileGrid[i][j-1];
                    tileGrid[i][j] = tempTile;
                    tileGrid[i][j-1] = null;

                    me.game.add.tween(tempTile).to({y:me.topBuffer+(me.tileHeight*j)+(me.tileHeight/2)}, 200, Phaser.Easing.Linear.In, true);

                    j = tileGrid[i].length;
                }
            }
        }
    },
    fillTile: function(){

        var me = this;

        //Check for blank spaces in the grid and add new tiles at that position
        for(var i = 0; i < tileGrid.length; i++){

            for(var j = 0; j < tileGrid.length; j++){

                if (tileGrid[i][j] == null)
                {
                    //Found a blank spot so lets add animate a tile there
                    var tile = me.addTile(i, j);
                    //And also update our "theoretical" grid
                    tileGrid[i][j] = tile;
                }

            }
        }
    },
    get_max_number: function()
    {
        var me = this;
        for(var i=0;i<tileGrid.length;i++)
        {
            for(var j=0;j<tileGrid[i].length;j++)
            {
                if(max_number<tileGrid[i][j].tileLetter)
                {
                    max_number = tileGrid[i][j].tileLetter;
                }
            }
        }
        high_number.text = max_number;
        if(high_number.text.length>=3)
        {
            high_number.scale.setTo(0.75);
        }
    },
    game_over: function(){
        var me = this;
        gameover_popup = game.add.group();

        overlay = game.add.image(0,0,'overlay');
        overlay.width = game.width;
        overlay.height = game.height;
        overlay.inputEnabled = true;
        gameover_popup.add(overlay);

        popup_box = game.add.sprite(game.world.centerX,game.world.centerY,'popup');
        popup_box.anchor.setTo(0.5);
        popup_box.height = 550;
        gameover_popup.add(popup_box);

        var style = { font: "bold 40px Arial", fill: "#6b6b68", boundsAlignH: "right", boundsAlignV: "right"};
        gameover_text = game.add.text(game.world.centerX,game.world.centerY-200,'GAME OVER',style);
        gameover_text.anchor.setTo(0.5);
        gameover_popup.add(gameover_text);


        label = game.add.sprite(game.world.centerX,game.world.centerY-90,'label');
        label.scale.setTo(0.35);
        label.anchor.setTo(0.5);
        gameover_popup.add(label);

        var style = { font: "bold 60px Arial", fill: "#e05664", boundsAlignH: "right", boundsAlignV: "right"};
        text = game.add.text(game.world.centerX,game.world.centerY-100,max_number,style);
        text.anchor.setTo(0.5);
        if(text.text.length>=3)
        {
            text.scale.setTo(0.75);
        }
        gameover_popup.add(text);
        
        var style = { font: "bold 35px Arial", fill: "#e58d2b", boundsAlignH: "right", boundsAlignV: "right"};
        text = game.add.text(game.world.centerX,game.world.centerY,'Last',style);
        text.anchor.setTo(0.5);
        gameover_popup.add(text);

        var style = { font: "bold 30px Arial", fill: "#6b6b68", boundsAlignH: "right", boundsAlignV: "right"};
        text = game.add.text(game.world.centerX-120,game.world.centerY+100,'SCORE: '+me.score,style);
        text.anchor.setTo(0.5);
        gameover_popup.add(text);

        text = game.add.text(game.world.centerX+100,game.world.centerY+100,'BEST: '+me.bestscore,style);
        text.anchor.setTo(0.5);
        gameover_popup.add(text);

        retry_btn = game.add.sprite(game.world.centerX-80,game.world.centerY+200,'retry');
        retry_btn.anchor.setTo(0.5);
        retry_btn.scale.setTo(0.60);
        retry_btn.inputEnabled = true;
        retry_btn.events.onInputUp.add(function(){
            click_sound_play();
            tween = game.add.tween(gameover_popup);
            tween.to({y:-game.height}, 400, Phaser.Easing.Quadratic.InOut,0);
            tween.onComplete.add(function(){
                gameover_popup.destroy();
                game.state.start('Game');
            },this);
            tween.start();
        },this);
        gameover_popup.add(retry_btn);

        home_btn = game.add.sprite(game.world.centerX+80,game.world.centerY+200,'home');
        home_btn.anchor.setTo(0.5);
        home_btn.scale.setTo(0.60);
        home_btn.inputEnabled = true;
        home_btn.events.onInputUp.add(function(){
            click_sound_play();
            tween = game.add.tween(gameover_popup);
            tween.to({y:-game.height}, 400, Phaser.Easing.Quadratic.InOut,0);
            tween.onComplete.add(function(){
                gameover_popup.destroy();
                game.state.start('Main');
            },this);
            tween.start();
        },this);
        gameover_popup.add(home_btn);

        gameover_popup.y -= game.height;
        
        tween = game.add.tween(gameover_popup);
        tween.to({y:0}, 400, Phaser.Easing.Quadratic.InOut,0);
        tween.start();
    },
    openmenu: function(){
        click_sound_play();
        // game.input.onDown.removeAll();
        var me = this;
        popup = false;
        menu_popup = game.add.group();

        overlay = game.add.image(0,0,'overlay');
        overlay.width = game.width;
        overlay.height = game.height;
        overlay.inputEnabled = true;
        menu_popup.add(overlay);

        popup_box = game.add.sprite(game.world.centerX,game.world.centerY,'popup1');
        popup_box.anchor.setTo(0.5);
        popup_box.scale.setTo(1.2);
        menu_popup.add(popup_box);

        var style = { font: "bold 40px Arial", fill: "#6b6b68", boundsAlignH: "right", boundsAlignV: "right"};
        gameover_text = game.add.text(game.world.centerX,game.world.centerY-100,'PAUSE',style);
        gameover_text.anchor.setTo(0.5);
        menu_popup.add(gameover_text);

        shop_btn = game.add.sprite(game.world.centerX,game.world.centerY,'shop');
        shop_btn.scale.setTo(0.60);
        shop_btn.anchor.setTo(0.5)
        shop_btn.inputEnabled = true;
        shop_btn.events.onInputUp.add(function(){
            click_sound_play();
            tween = game.add.tween(menu_popup);
            tween.to({y:-game.height}, 400, Phaser.Easing.Quadratic.InOut,0);
            tween.onComplete.add(function(){
                menu_popup.destroy();
                me.create_shop();
                // me.gameshop_open();
            },this);
            tween.start();
        },this);
        menu_popup.add(shop_btn);

        retry_btn = game.add.sprite(shop_btn.x-120,shop_btn.y,'retry');
        retry_btn.anchor.setTo(0.5);
        retry_btn.scale.setTo(0.60);
        retry_btn.inputEnabled = true;
        retry_btn.events.onInputUp.add(function(){
            click_sound_play();
            tween = game.add.tween(menu_popup);
            tween.to({y:-game.height}, 400, Phaser.Easing.Quadratic.InOut,0);
            tween.onComplete.add(function(){
                menu_popup.destroy();
                game.state.start('Game');
            },this);
            tween.start();
        },this);
        menu_popup.add(retry_btn);
        
        resume_btn = game.add.sprite(shop_btn.x+120,shop_btn.y,'resume');
        resume_btn.scale.setTo(0.60);
        resume_btn.anchor.setTo(0.5)
        resume_btn.inputEnabled = true;
        resume_btn.events.onInputUp.add(function(){
            click_sound_play();
            popup = true;
            tween = game.add.tween(menu_popup);
            tween.to({y:-game.height}, 400, Phaser.Easing.Quadratic.InOut,0);
            tween.onComplete.add(function(){
                menu_popup.destroy();
            },this);
            tween.start();
        },this);
        menu_popup.add(resume_btn);

        sound = game.add.sprite(shop_btn.x,game.world.centerY+60,'sound_btn');
        sound.scale.setTo(0.60);
        sound.anchor.setTo(0.5,0)
        sound.inputEnabled = true;
        sound.events.onInputUp.add(soundchange,this);
        menu_popup.add(sound);

        menu_popup.y += game.height;
        
        tween = game.add.tween(menu_popup);
        tween.to({y:0}, 400, Phaser.Easing.Quadratic.InOut,0);
        tween.start();
    },
    create_shop: function(){
        gameshop_popup.destroy();
        gameshop_popup = game.add.group();

        overlay = game.add.image(0,0,'overlay');
        overlay.width = game.width;
        overlay.height = game.height;
        overlay.inputEnabled = true;
        gameshop_popup.add(overlay);

        popup_box = game.add.sprite(game.world.centerX,game.world.centerY,'popup');
        popup_box.anchor.setTo(0.5);
        popup_box.scale.setTo(1.1);
        popup_box.height = 700;
        gameshop_popup.add(popup_box);

        close_btn = game.add.sprite(popup_box.x+popup_box.width/2.5,250,'close');
        close_btn.anchor.setTo(0.5);
        close_btn.scale.setTo(0.5);
        close_btn.inputEnabled = true;
        close_btn.events.onInputUp.add(function(){
            click_sound_play();
            remove_gameshop();
            /*tween = game.add.tween(shop_popup);
            tween.to({y:-game.height}, 400, Phaser.Easing.Quadratic.InOut,0);
            tween.onComplete.add(function(){
                skins_list.destroy();
                shop_popup.destroy();
                popup = true;
            },this);
            tween.start();*/
        },this);
        gameshop_popup.add(close_btn);
        
        var style = { font: "bold 40px Arial", fill: "#6b6b68", boundsAlignH: "right", boundsAlignV: "right"};
        text = game.add.text(game.world.centerX,game.world.centerY-280,'SKINS',style);
        text.anchor.setTo(0.5);
        gameshop_popup.add(text);

        energy_icon = game.add.sprite(game.world.centerX-40,text.y+80,'energy');
        energy_icon.anchor.setTo(0.5);
        energy_icon.scale.setTo(0.5);
        gameshop_popup.add(energy_icon);

        energy_no = '0';
        if(window.localStorage.getItem('energy'))
        {
            energy_no = window.localStorage.getItem('energy');
            // energy_no = 250;
        }        
        energy_is = game.add.text(energy_icon.x+25,energy_icon.y,energy_no,style);
        energy_is.anchor.setTo(0,0.5);
        gameshop_popup.add(energy_is);
        
        skins_list = game.add.tileSprite(game.world.centerX,game.world.centerY,230, 286, 'allskins');
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
                remove_gameshop();
                if(game.state.current=='Game')
                {
                    change_skins();
                }
                popup = true;
            }
        },this);
        gameshop_popup.add(select_btn);

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
                    console.log(skins_pos);
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
        gameshop_popup.add(left_btn);

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
        gameshop_popup.add(right_btn);

        gameshop_popup.y += game.height;
        skins_list.y += game.height;

        tween = game.add.tween(skins_list);
        tween.to({y:game.world.centerY}, 400, Phaser.Easing.Quadratic.InOut,0);
        tween.start();
        
        tween = game.add.tween(gameshop_popup);
        tween.to({y:0}, 400, Phaser.Easing.Quadratic.InOut,0);
        tween.start();

        function remove_gameshop()
        {
            tween = game.add.tween(skins_list);
            tween.to({y:-game.height}, 400, Phaser.Easing.Quadratic.InOut,0);
            tween.start();

            tween = game.add.tween(gameshop_popup);
            tween.to({y:-game.height}, 400, Phaser.Easing.Quadratic.InOut,0);
            tween.onComplete.add(function(){
                skins_list.y -= game.height;
                gameshop_popup.y -= game.height;
                popup = true;
            },this);
            tween.start();
        }
    }
};
