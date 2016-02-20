// Compiled by ClojureScript 1.7.228 {}
goog.provide('nihl.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('sablono.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
nihl.core.floor = (function nihl$core$floor(x){
return Math.floor(x);
});
nihl.core.gravity = 0.05;
nihl.core.jump_vel = (10);
nihl.core.floor_y = (441);
nihl.core.player_height = (41);
nihl.core.player_width = (57);
nihl.core.enemy_width = (86);
nihl.core.enemy_height = (50);
nihl.core.starting_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"game-started?","game-started?",-676608539),new cljs.core.Keyword(null,"y-vel","y-vel",584782503),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"midair?","midair?",-1450373843),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"attacking?","attacking?",-1611693999),new cljs.core.Keyword(null,"cur-time","cur-time",518931125),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"item-list","item-list",-1307039302),new cljs.core.Keyword(null,"enemy-list","enemy-list",-1697716518),new cljs.core.Keyword(null,"timer-running?","timer-running?",1947761339),new cljs.core.Keyword(null,"x-vel","x-vel",961283931),new cljs.core.Keyword(null,"attack","attack",1957061788)],[(400),false,(0),(0),(0),false,(1),false,(0),(5),(212),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"type","type",1174270348),""], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"x-vel","x-vel",961283931),(0),new cljs.core.Keyword(null,"y-vel","y-vel",584782503),(0),new cljs.core.Keyword(null,"health","health",-295520649),(1),new cljs.core.Keyword(null,"attack","attack",1957061788),(1),new cljs.core.Keyword(null,"worth","worth",-1424942285),(1),new cljs.core.Keyword(null,"name","name",1843675177),""], null)], null),false,(0),(1)]);
nihl.core.reset_state = (function nihl$core$reset_state(_,cur_time){
return cljs.core.assoc.call(null,nihl.core.starting_state,new cljs.core.Keyword(null,"game-started?","game-started?",-676608539),true,new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time,new cljs.core.Keyword(null,"timer-running?","timer-running?",1947761339),true);
});
if(typeof nihl.core.game_state !== 'undefined'){
} else {
nihl.core.game_state = cljs.core.atom.call(null,nihl.core.starting_state);
}
nihl.core.in_enemy_QMARK_ = (function nihl$core$in_enemy_QMARK_(){
return null;
});
nihl.core.hit_floor_QMARK_ = (function nihl$core$hit_floor_QMARK_(p__23261){
var map__23264 = p__23261;
var map__23264__$1 = ((((!((map__23264 == null)))?((((map__23264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23264):map__23264);
var y = cljs.core.get.call(null,map__23264__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (y >= (nihl.core.floor_y - nihl.core.player_height));
});
nihl.core.collision_QMARK_ = (function nihl$core$collision_QMARK_(state){
return null;
});
nihl.core.game_over_QMARK_ = (function nihl$core$game_over_QMARK_(state){
return null;
});
nihl.core.new_enemy = (function nihl$core$new_enemy(state){
return null;
});
nihl.core.update_enemies = (function nihl$core$update_enemies(state){
return null;
});
nihl.core.update_player = (function nihl$core$update_player(p__23266){
var map__23269 = p__23266;
var map__23269__$1 = ((((!((map__23269 == null)))?((((map__23269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23269):map__23269);
var st = map__23269__$1;
var time_delta = cljs.core.get.call(null,map__23269__$1,new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875));
var x = cljs.core.get.call(null,map__23269__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__23269__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x_vel = cljs.core.get.call(null,map__23269__$1,new cljs.core.Keyword(null,"x-vel","x-vel",961283931));
var y_vel = cljs.core.get.call(null,map__23269__$1,new cljs.core.Keyword(null,"y-vel","y-vel",584782503));
return null;
});
nihl.core.update_ui = (function nihl$core$update_ui(state){
return null;
});
nihl.core.update_world = (function nihl$core$update_world(state){
return nihl.core.update_ui.call(null,nihl.core.game_over_QMARK_.call(null,nihl.core.collision_QMARK_.call(null,nihl.core.update_enemies.call(null,nihl.core.update_player.call(null,state)))));
});
nihl.core.jump = (function nihl$core$jump(p__23271){
var map__23274 = p__23271;
var map__23274__$1 = ((((!((map__23274 == null)))?((((map__23274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23274):map__23274);
var st = map__23274__$1;
var x_vel = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"x-vel","x-vel",961283931));
var y_vel = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"y-vel","y-vel",584782503));
var midair_QMARK_ = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"midair?","midair?",-1450373843));
return null;
});
nihl.core.check_input = (function nihl$core$check_input(event){
return null;
});
nihl.core.translate = (function nihl$core$translate(start_pos,vel,time){
return nihl.core.floor.call(null,(start_pos + (time * vel)));
});
nihl.core.render_border = (function nihl$core$render_border(p__23276){
var map__23279 = p__23276;
var map__23279__$1 = ((((!((map__23279 == null)))?((((map__23279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23279):map__23279);
var state = map__23279__$1;
var cur_time = cljs.core.get.call(null,map__23279__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var x_vel = cljs.core.get.call(null,map__23279__$1,new cljs.core.Keyword(null,"x-vel","x-vel",961283931));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"border-pos","border-pos",-56607875),cljs.core.mod.call(null,nihl.core.translate.call(null,(0),x_vel,cur_time),(23)));
});
nihl.core.render_world = (function nihl$core$render_world(state){
return nihl.core.render_border.call(null,state);
});
nihl.core.time_loop = (function nihl$core$time_loop(time){
var new_state = cljs.core.swap_BANG_.call(null,nihl.core.game_state,nihl.core.update_world);
if(cljs.core.truth_(new cljs.core.Keyword(null,"game-started?","game-started?",-676608539).cljs$core$IFn$_invoke$arity$1(new_state))){
var c__20367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20367__auto__,new_state){
return (function (){
var f__20368__auto__ = (function (){var switch__20346__auto__ = ((function (c__20367__auto__,new_state){
return (function (state_23301){
var state_val_23302 = (state_23301[(1)]);
if((state_val_23302 === (1))){
var inst_23296 = cljs.core.async.timeout.call(null,(30));
var state_23301__$1 = state_23301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23301__$1,(2),inst_23296);
} else {
if((state_val_23302 === (2))){
var inst_23298 = (state_23301[(2)]);
var inst_23299 = window.requestAnimationFrame(nihl$core$time_loop);
var state_23301__$1 = (function (){var statearr_23303 = state_23301;
(statearr_23303[(7)] = inst_23298);

return statearr_23303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23301__$1,inst_23299);
} else {
return null;
}
}
});})(c__20367__auto__,new_state))
;
return ((function (switch__20346__auto__,c__20367__auto__,new_state){
return (function() {
var nihl$core$time_loop_$_state_machine__20347__auto__ = null;
var nihl$core$time_loop_$_state_machine__20347__auto____0 = (function (){
var statearr_23307 = [null,null,null,null,null,null,null,null];
(statearr_23307[(0)] = nihl$core$time_loop_$_state_machine__20347__auto__);

(statearr_23307[(1)] = (1));

return statearr_23307;
});
var nihl$core$time_loop_$_state_machine__20347__auto____1 = (function (state_23301){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_23301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e23308){if((e23308 instanceof Object)){
var ex__20350__auto__ = e23308;
var statearr_23309_23311 = state_23301;
(statearr_23309_23311[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23312 = state_23301;
state_23301 = G__23312;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
nihl$core$time_loop_$_state_machine__20347__auto__ = function(state_23301){
switch(arguments.length){
case 0:
return nihl$core$time_loop_$_state_machine__20347__auto____0.call(this);
case 1:
return nihl$core$time_loop_$_state_machine__20347__auto____1.call(this,state_23301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nihl$core$time_loop_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = nihl$core$time_loop_$_state_machine__20347__auto____0;
nihl$core$time_loop_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = nihl$core$time_loop_$_state_machine__20347__auto____1;
return nihl$core$time_loop_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20367__auto__,new_state))
})();
var state__20369__auto__ = (function (){var statearr_23310 = f__20368__auto__.call(null);
(statearr_23310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20367__auto__);

return statearr_23310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20369__auto__);
});})(c__20367__auto__,new_state))
);

return c__20367__auto__;
} else {
return null;
}
});
nihl.core.start_game = (function nihl$core$start_game(){
return window.requestAnimationFrame((function (time){
cljs.core.reset_BANG_.call(null,nihl.core.game_state,nihl.core.reset_state.call(null,cljs.core.deref.call(null,nihl.core.game_state),time));

return nihl.core.time_loop.call(null,time);
}));
});
nihl.core.px = (function nihl$core$px(n){
return [cljs.core.str(n),cljs.core.str("px")].join('');
});
nihl.core.main_template = (function nihl$core$main_template(p__23313){
var map__23317 = p__23313;
var map__23317__$1 = ((((!((map__23317 == null)))?((((map__23317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23317):map__23317);
var game_started_QMARK_ = cljs.core.get.call(null,map__23317__$1,new cljs.core.Keyword(null,"game-started?","game-started?",-676608539));
var health = cljs.core.get.call(null,map__23317__$1,new cljs.core.Keyword(null,"health","health",-295520649));
var border_pos = cljs.core.get.call(null,map__23317__$1,new cljs.core.Keyword(null,"border-pos","border-pos",-56607875));
var x = cljs.core.get.call(null,map__23317__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__23317__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return React.createElement("div",{"onMouseDown": ((function (map__23317,map__23317__$1,game_started_QMARK_,health,border_pos,x,y){
return (function (e){
cljs.core.swap_BANG_.call(null,nihl.core.game_state,nihl.core.jump);

return e.preventDefault();
});})(map__23317,map__23317__$1,game_started_QMARK_,health,border_pos,x,y))
, "onKeyDown": nihl.core.check_input, "className": "board"},(function (){var attrs23319 = health;
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs23319))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["score",null], null), null)], null),attrs23319)):{"className": "score"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23319))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23319)], null))));
})(),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,game_started_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.start-button","a.start-button",255836936),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__23317,map__23317__$1,game_started_QMARK_,health,border_pos,x,y){
return (function (){
return nihl.core.start_game.call(null);
});})(map__23317,map__23317__$1,game_started_QMARK_,health,border_pos,x,y))
], null),"START"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null))),React.createElement("div",{"style": {"top": nihl.core.px.call(null,y), "left": nihl.core.px.call(null,x)}, "className": "flappy"}),React.createElement("div",{"style": {"backgroundPositionX": nihl.core.px.call(null,border_pos)}, "className": "scrolling-border"}));
});
var node_23320 = document.getElementById("board-area");
nihl.core.renderer = ((function (node_23320){
return (function nihl$core$renderer(full_state){
return React.render(nihl.core.main_template.call(null,full_state),node_23320);
});})(node_23320))
;
cljs.core.add_watch.call(null,nihl.core.game_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (_,___$1,___$2,n){
return nihl.core.renderer.call(null,nihl.core.render_world.call(null,n));
}));
cljs.core.reset_BANG_.call(null,nihl.core.game_state,cljs.core.deref.call(null,nihl.core.game_state));

//# sourceMappingURL=core.js.map?rel=1455926313296