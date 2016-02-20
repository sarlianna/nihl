// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24895 = cljs.core._EQ_;
var expr__24896 = (function (){var or__18356__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e24899){if((e24899 instanceof Error)){
var e = e24899;
return false;
} else {
throw e24899;

}
}})();
if(cljs.core.truth_(or__18356__auto__)){
return or__18356__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24895.call(null,"true",expr__24896))){
return true;
} else {
if(cljs.core.truth_(pred__24895.call(null,"false",expr__24896))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24896)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24901){if((e24901 instanceof Error)){
var e = e24901;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24901;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19421__auto__ = [];
var len__19414__auto___24903 = arguments.length;
var i__19415__auto___24904 = (0);
while(true){
if((i__19415__auto___24904 < len__19414__auto___24903)){
args__19421__auto__.push((arguments[i__19415__auto___24904]));

var G__24905 = (i__19415__auto___24904 + (1));
i__19415__auto___24904 = G__24905;
continue;
} else {
}
break;
}

var argseq__19422__auto__ = ((((0) < args__19421__auto__.length))?(new cljs.core.IndexedSeq(args__19421__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19422__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24902){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24902));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24906){
var map__24909 = p__24906;
var map__24909__$1 = ((((!((map__24909 == null)))?((((map__24909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24909):map__24909);
var message = cljs.core.get.call(null,map__24909__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24909__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18356__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18356__auto__)){
return or__18356__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18344__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18344__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18344__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20509__auto___25071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___25071,ch){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___25071,ch){
return (function (state_25040){
var state_val_25041 = (state_25040[(1)]);
if((state_val_25041 === (7))){
var inst_25036 = (state_25040[(2)]);
var state_25040__$1 = state_25040;
var statearr_25042_25072 = state_25040__$1;
(statearr_25042_25072[(2)] = inst_25036);

(statearr_25042_25072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (1))){
var state_25040__$1 = state_25040;
var statearr_25043_25073 = state_25040__$1;
(statearr_25043_25073[(2)] = null);

(statearr_25043_25073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (4))){
var inst_24993 = (state_25040[(7)]);
var inst_24993__$1 = (state_25040[(2)]);
var state_25040__$1 = (function (){var statearr_25044 = state_25040;
(statearr_25044[(7)] = inst_24993__$1);

return statearr_25044;
})();
if(cljs.core.truth_(inst_24993__$1)){
var statearr_25045_25074 = state_25040__$1;
(statearr_25045_25074[(1)] = (5));

} else {
var statearr_25046_25075 = state_25040__$1;
(statearr_25046_25075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (15))){
var inst_25000 = (state_25040[(8)]);
var inst_25015 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25000);
var inst_25016 = cljs.core.first.call(null,inst_25015);
var inst_25017 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25016);
var inst_25018 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25017)].join('');
var inst_25019 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25018);
var state_25040__$1 = state_25040;
var statearr_25047_25076 = state_25040__$1;
(statearr_25047_25076[(2)] = inst_25019);

(statearr_25047_25076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (13))){
var inst_25024 = (state_25040[(2)]);
var state_25040__$1 = state_25040;
var statearr_25048_25077 = state_25040__$1;
(statearr_25048_25077[(2)] = inst_25024);

(statearr_25048_25077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (6))){
var state_25040__$1 = state_25040;
var statearr_25049_25078 = state_25040__$1;
(statearr_25049_25078[(2)] = null);

(statearr_25049_25078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (17))){
var inst_25022 = (state_25040[(2)]);
var state_25040__$1 = state_25040;
var statearr_25050_25079 = state_25040__$1;
(statearr_25050_25079[(2)] = inst_25022);

(statearr_25050_25079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (3))){
var inst_25038 = (state_25040[(2)]);
var state_25040__$1 = state_25040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25040__$1,inst_25038);
} else {
if((state_val_25041 === (12))){
var inst_24999 = (state_25040[(9)]);
var inst_25013 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24999,opts);
var state_25040__$1 = state_25040;
if(cljs.core.truth_(inst_25013)){
var statearr_25051_25080 = state_25040__$1;
(statearr_25051_25080[(1)] = (15));

} else {
var statearr_25052_25081 = state_25040__$1;
(statearr_25052_25081[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (2))){
var state_25040__$1 = state_25040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25040__$1,(4),ch);
} else {
if((state_val_25041 === (11))){
var inst_25000 = (state_25040[(8)]);
var inst_25005 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25006 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25000);
var inst_25007 = cljs.core.async.timeout.call(null,(1000));
var inst_25008 = [inst_25006,inst_25007];
var inst_25009 = (new cljs.core.PersistentVector(null,2,(5),inst_25005,inst_25008,null));
var state_25040__$1 = state_25040;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25040__$1,(14),inst_25009);
} else {
if((state_val_25041 === (9))){
var inst_25000 = (state_25040[(8)]);
var inst_25026 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25027 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25000);
var inst_25028 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25027);
var inst_25029 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25028)].join('');
var inst_25030 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25029);
var state_25040__$1 = (function (){var statearr_25053 = state_25040;
(statearr_25053[(10)] = inst_25026);

return statearr_25053;
})();
var statearr_25054_25082 = state_25040__$1;
(statearr_25054_25082[(2)] = inst_25030);

(statearr_25054_25082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (5))){
var inst_24993 = (state_25040[(7)]);
var inst_24995 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24996 = (new cljs.core.PersistentArrayMap(null,2,inst_24995,null));
var inst_24997 = (new cljs.core.PersistentHashSet(null,inst_24996,null));
var inst_24998 = figwheel.client.focus_msgs.call(null,inst_24997,inst_24993);
var inst_24999 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24998);
var inst_25000 = cljs.core.first.call(null,inst_24998);
var inst_25001 = figwheel.client.autoload_QMARK_.call(null);
var state_25040__$1 = (function (){var statearr_25055 = state_25040;
(statearr_25055[(8)] = inst_25000);

(statearr_25055[(9)] = inst_24999);

return statearr_25055;
})();
if(cljs.core.truth_(inst_25001)){
var statearr_25056_25083 = state_25040__$1;
(statearr_25056_25083[(1)] = (8));

} else {
var statearr_25057_25084 = state_25040__$1;
(statearr_25057_25084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (14))){
var inst_25011 = (state_25040[(2)]);
var state_25040__$1 = state_25040;
var statearr_25058_25085 = state_25040__$1;
(statearr_25058_25085[(2)] = inst_25011);

(statearr_25058_25085[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (16))){
var state_25040__$1 = state_25040;
var statearr_25059_25086 = state_25040__$1;
(statearr_25059_25086[(2)] = null);

(statearr_25059_25086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (10))){
var inst_25032 = (state_25040[(2)]);
var state_25040__$1 = (function (){var statearr_25060 = state_25040;
(statearr_25060[(11)] = inst_25032);

return statearr_25060;
})();
var statearr_25061_25087 = state_25040__$1;
(statearr_25061_25087[(2)] = null);

(statearr_25061_25087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25041 === (8))){
var inst_24999 = (state_25040[(9)]);
var inst_25003 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24999,opts);
var state_25040__$1 = state_25040;
if(cljs.core.truth_(inst_25003)){
var statearr_25062_25088 = state_25040__$1;
(statearr_25062_25088[(1)] = (11));

} else {
var statearr_25063_25089 = state_25040__$1;
(statearr_25063_25089[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto___25071,ch))
;
return ((function (switch__20397__auto__,c__20509__auto___25071,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20398__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20398__auto____0 = (function (){
var statearr_25067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25067[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20398__auto__);

(statearr_25067[(1)] = (1));

return statearr_25067;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20398__auto____1 = (function (state_25040){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_25040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e25068){if((e25068 instanceof Object)){
var ex__20401__auto__ = e25068;
var statearr_25069_25090 = state_25040;
(statearr_25069_25090[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25091 = state_25040;
state_25040 = G__25091;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20398__auto__ = function(state_25040){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20398__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20398__auto____1.call(this,state_25040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20398__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20398__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___25071,ch))
})();
var state__20511__auto__ = (function (){var statearr_25070 = f__20510__auto__.call(null);
(statearr_25070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___25071);

return statearr_25070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___25071,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25092_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25092_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25099 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25099){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25097 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25098 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25098;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25097;
}}catch (e25096){if((e25096 instanceof Error)){
var e = e25096;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25099], null));
} else {
var e = e25096;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25099))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25100){
var map__25107 = p__25100;
var map__25107__$1 = ((((!((map__25107 == null)))?((((map__25107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25107):map__25107);
var opts = map__25107__$1;
var build_id = cljs.core.get.call(null,map__25107__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25107,map__25107__$1,opts,build_id){
return (function (p__25109){
var vec__25110 = p__25109;
var map__25111 = cljs.core.nth.call(null,vec__25110,(0),null);
var map__25111__$1 = ((((!((map__25111 == null)))?((((map__25111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25111):map__25111);
var msg = map__25111__$1;
var msg_name = cljs.core.get.call(null,map__25111__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25110,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25110,map__25111,map__25111__$1,msg,msg_name,_,map__25107,map__25107__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25110,map__25111,map__25111__$1,msg,msg_name,_,map__25107,map__25107__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25107,map__25107__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25117){
var vec__25118 = p__25117;
var map__25119 = cljs.core.nth.call(null,vec__25118,(0),null);
var map__25119__$1 = ((((!((map__25119 == null)))?((((map__25119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25119):map__25119);
var msg = map__25119__$1;
var msg_name = cljs.core.get.call(null,map__25119__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25118,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25121){
var map__25131 = p__25121;
var map__25131__$1 = ((((!((map__25131 == null)))?((((map__25131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25131):map__25131);
var on_compile_warning = cljs.core.get.call(null,map__25131__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25131__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25131,map__25131__$1,on_compile_warning,on_compile_fail){
return (function (p__25133){
var vec__25134 = p__25133;
var map__25135 = cljs.core.nth.call(null,vec__25134,(0),null);
var map__25135__$1 = ((((!((map__25135 == null)))?((((map__25135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25135):map__25135);
var msg = map__25135__$1;
var msg_name = cljs.core.get.call(null,map__25135__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25134,(1));
var pred__25137 = cljs.core._EQ_;
var expr__25138 = msg_name;
if(cljs.core.truth_(pred__25137.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25138))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25137.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25138))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25131,map__25131__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto__,msg_hist,msg_names,msg){
return (function (state_25354){
var state_val_25355 = (state_25354[(1)]);
if((state_val_25355 === (7))){
var inst_25278 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
if(cljs.core.truth_(inst_25278)){
var statearr_25356_25402 = state_25354__$1;
(statearr_25356_25402[(1)] = (8));

} else {
var statearr_25357_25403 = state_25354__$1;
(statearr_25357_25403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (20))){
var inst_25348 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25358_25404 = state_25354__$1;
(statearr_25358_25404[(2)] = inst_25348);

(statearr_25358_25404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (27))){
var inst_25344 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25359_25405 = state_25354__$1;
(statearr_25359_25405[(2)] = inst_25344);

(statearr_25359_25405[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (1))){
var inst_25271 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25354__$1 = state_25354;
if(cljs.core.truth_(inst_25271)){
var statearr_25360_25406 = state_25354__$1;
(statearr_25360_25406[(1)] = (2));

} else {
var statearr_25361_25407 = state_25354__$1;
(statearr_25361_25407[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (24))){
var inst_25346 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25362_25408 = state_25354__$1;
(statearr_25362_25408[(2)] = inst_25346);

(statearr_25362_25408[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (4))){
var inst_25352 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25354__$1,inst_25352);
} else {
if((state_val_25355 === (15))){
var inst_25350 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25363_25409 = state_25354__$1;
(statearr_25363_25409[(2)] = inst_25350);

(statearr_25363_25409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (21))){
var inst_25309 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25364_25410 = state_25354__$1;
(statearr_25364_25410[(2)] = inst_25309);

(statearr_25364_25410[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (31))){
var inst_25333 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25354__$1 = state_25354;
if(cljs.core.truth_(inst_25333)){
var statearr_25365_25411 = state_25354__$1;
(statearr_25365_25411[(1)] = (34));

} else {
var statearr_25366_25412 = state_25354__$1;
(statearr_25366_25412[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (32))){
var inst_25342 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25367_25413 = state_25354__$1;
(statearr_25367_25413[(2)] = inst_25342);

(statearr_25367_25413[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (33))){
var inst_25331 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25368_25414 = state_25354__$1;
(statearr_25368_25414[(2)] = inst_25331);

(statearr_25368_25414[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (13))){
var inst_25292 = figwheel.client.heads_up.clear.call(null);
var state_25354__$1 = state_25354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25354__$1,(16),inst_25292);
} else {
if((state_val_25355 === (22))){
var inst_25313 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25314 = figwheel.client.heads_up.append_message.call(null,inst_25313);
var state_25354__$1 = state_25354;
var statearr_25369_25415 = state_25354__$1;
(statearr_25369_25415[(2)] = inst_25314);

(statearr_25369_25415[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (36))){
var inst_25340 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25370_25416 = state_25354__$1;
(statearr_25370_25416[(2)] = inst_25340);

(statearr_25370_25416[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (29))){
var inst_25324 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25371_25417 = state_25354__$1;
(statearr_25371_25417[(2)] = inst_25324);

(statearr_25371_25417[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (6))){
var inst_25273 = (state_25354[(7)]);
var state_25354__$1 = state_25354;
var statearr_25372_25418 = state_25354__$1;
(statearr_25372_25418[(2)] = inst_25273);

(statearr_25372_25418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (28))){
var inst_25320 = (state_25354[(2)]);
var inst_25321 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25322 = figwheel.client.heads_up.display_warning.call(null,inst_25321);
var state_25354__$1 = (function (){var statearr_25373 = state_25354;
(statearr_25373[(8)] = inst_25320);

return statearr_25373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25354__$1,(29),inst_25322);
} else {
if((state_val_25355 === (25))){
var inst_25318 = figwheel.client.heads_up.clear.call(null);
var state_25354__$1 = state_25354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25354__$1,(28),inst_25318);
} else {
if((state_val_25355 === (34))){
var inst_25335 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25354__$1 = state_25354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25354__$1,(37),inst_25335);
} else {
if((state_val_25355 === (17))){
var inst_25300 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25374_25419 = state_25354__$1;
(statearr_25374_25419[(2)] = inst_25300);

(statearr_25374_25419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (3))){
var inst_25290 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25354__$1 = state_25354;
if(cljs.core.truth_(inst_25290)){
var statearr_25375_25420 = state_25354__$1;
(statearr_25375_25420[(1)] = (13));

} else {
var statearr_25376_25421 = state_25354__$1;
(statearr_25376_25421[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (12))){
var inst_25286 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25377_25422 = state_25354__$1;
(statearr_25377_25422[(2)] = inst_25286);

(statearr_25377_25422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (2))){
var inst_25273 = (state_25354[(7)]);
var inst_25273__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25354__$1 = (function (){var statearr_25378 = state_25354;
(statearr_25378[(7)] = inst_25273__$1);

return statearr_25378;
})();
if(cljs.core.truth_(inst_25273__$1)){
var statearr_25379_25423 = state_25354__$1;
(statearr_25379_25423[(1)] = (5));

} else {
var statearr_25380_25424 = state_25354__$1;
(statearr_25380_25424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (23))){
var inst_25316 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25354__$1 = state_25354;
if(cljs.core.truth_(inst_25316)){
var statearr_25381_25425 = state_25354__$1;
(statearr_25381_25425[(1)] = (25));

} else {
var statearr_25382_25426 = state_25354__$1;
(statearr_25382_25426[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (35))){
var state_25354__$1 = state_25354;
var statearr_25383_25427 = state_25354__$1;
(statearr_25383_25427[(2)] = null);

(statearr_25383_25427[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (19))){
var inst_25311 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25354__$1 = state_25354;
if(cljs.core.truth_(inst_25311)){
var statearr_25384_25428 = state_25354__$1;
(statearr_25384_25428[(1)] = (22));

} else {
var statearr_25385_25429 = state_25354__$1;
(statearr_25385_25429[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (11))){
var inst_25282 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25386_25430 = state_25354__$1;
(statearr_25386_25430[(2)] = inst_25282);

(statearr_25386_25430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (9))){
var inst_25284 = figwheel.client.heads_up.clear.call(null);
var state_25354__$1 = state_25354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25354__$1,(12),inst_25284);
} else {
if((state_val_25355 === (5))){
var inst_25275 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25354__$1 = state_25354;
var statearr_25387_25431 = state_25354__$1;
(statearr_25387_25431[(2)] = inst_25275);

(statearr_25387_25431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (14))){
var inst_25302 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25354__$1 = state_25354;
if(cljs.core.truth_(inst_25302)){
var statearr_25388_25432 = state_25354__$1;
(statearr_25388_25432[(1)] = (18));

} else {
var statearr_25389_25433 = state_25354__$1;
(statearr_25389_25433[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (26))){
var inst_25326 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25354__$1 = state_25354;
if(cljs.core.truth_(inst_25326)){
var statearr_25390_25434 = state_25354__$1;
(statearr_25390_25434[(1)] = (30));

} else {
var statearr_25391_25435 = state_25354__$1;
(statearr_25391_25435[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (16))){
var inst_25294 = (state_25354[(2)]);
var inst_25295 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25296 = figwheel.client.format_messages.call(null,inst_25295);
var inst_25297 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25298 = figwheel.client.heads_up.display_error.call(null,inst_25296,inst_25297);
var state_25354__$1 = (function (){var statearr_25392 = state_25354;
(statearr_25392[(9)] = inst_25294);

return statearr_25392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25354__$1,(17),inst_25298);
} else {
if((state_val_25355 === (30))){
var inst_25328 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25329 = figwheel.client.heads_up.display_warning.call(null,inst_25328);
var state_25354__$1 = state_25354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25354__$1,(33),inst_25329);
} else {
if((state_val_25355 === (10))){
var inst_25288 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25393_25436 = state_25354__$1;
(statearr_25393_25436[(2)] = inst_25288);

(statearr_25393_25436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (18))){
var inst_25304 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25305 = figwheel.client.format_messages.call(null,inst_25304);
var inst_25306 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25307 = figwheel.client.heads_up.display_error.call(null,inst_25305,inst_25306);
var state_25354__$1 = state_25354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25354__$1,(21),inst_25307);
} else {
if((state_val_25355 === (37))){
var inst_25337 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25394_25437 = state_25354__$1;
(statearr_25394_25437[(2)] = inst_25337);

(statearr_25394_25437[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25355 === (8))){
var inst_25280 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25354__$1 = state_25354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25354__$1,(11),inst_25280);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20509__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20397__auto__,c__20509__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto____0 = (function (){
var statearr_25398 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25398[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto__);

(statearr_25398[(1)] = (1));

return statearr_25398;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto____1 = (function (state_25354){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_25354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e25399){if((e25399 instanceof Object)){
var ex__20401__auto__ = e25399;
var statearr_25400_25438 = state_25354;
(statearr_25400_25438[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25439 = state_25354;
state_25354 = G__25439;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto__ = function(state_25354){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto____1.call(this,state_25354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto__,msg_hist,msg_names,msg))
})();
var state__20511__auto__ = (function (){var statearr_25401 = f__20510__auto__.call(null);
(statearr_25401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto__);

return statearr_25401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto__,msg_hist,msg_names,msg))
);

return c__20509__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20509__auto___25502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___25502,ch){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___25502,ch){
return (function (state_25485){
var state_val_25486 = (state_25485[(1)]);
if((state_val_25486 === (1))){
var state_25485__$1 = state_25485;
var statearr_25487_25503 = state_25485__$1;
(statearr_25487_25503[(2)] = null);

(statearr_25487_25503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25486 === (2))){
var state_25485__$1 = state_25485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25485__$1,(4),ch);
} else {
if((state_val_25486 === (3))){
var inst_25483 = (state_25485[(2)]);
var state_25485__$1 = state_25485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25485__$1,inst_25483);
} else {
if((state_val_25486 === (4))){
var inst_25473 = (state_25485[(7)]);
var inst_25473__$1 = (state_25485[(2)]);
var state_25485__$1 = (function (){var statearr_25488 = state_25485;
(statearr_25488[(7)] = inst_25473__$1);

return statearr_25488;
})();
if(cljs.core.truth_(inst_25473__$1)){
var statearr_25489_25504 = state_25485__$1;
(statearr_25489_25504[(1)] = (5));

} else {
var statearr_25490_25505 = state_25485__$1;
(statearr_25490_25505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25486 === (5))){
var inst_25473 = (state_25485[(7)]);
var inst_25475 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25473);
var state_25485__$1 = state_25485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25485__$1,(8),inst_25475);
} else {
if((state_val_25486 === (6))){
var state_25485__$1 = state_25485;
var statearr_25491_25506 = state_25485__$1;
(statearr_25491_25506[(2)] = null);

(statearr_25491_25506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25486 === (7))){
var inst_25481 = (state_25485[(2)]);
var state_25485__$1 = state_25485;
var statearr_25492_25507 = state_25485__$1;
(statearr_25492_25507[(2)] = inst_25481);

(statearr_25492_25507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25486 === (8))){
var inst_25477 = (state_25485[(2)]);
var state_25485__$1 = (function (){var statearr_25493 = state_25485;
(statearr_25493[(8)] = inst_25477);

return statearr_25493;
})();
var statearr_25494_25508 = state_25485__$1;
(statearr_25494_25508[(2)] = null);

(statearr_25494_25508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20509__auto___25502,ch))
;
return ((function (switch__20397__auto__,c__20509__auto___25502,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20398__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20398__auto____0 = (function (){
var statearr_25498 = [null,null,null,null,null,null,null,null,null];
(statearr_25498[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20398__auto__);

(statearr_25498[(1)] = (1));

return statearr_25498;
});
var figwheel$client$heads_up_plugin_$_state_machine__20398__auto____1 = (function (state_25485){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_25485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e25499){if((e25499 instanceof Object)){
var ex__20401__auto__ = e25499;
var statearr_25500_25509 = state_25485;
(statearr_25500_25509[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25510 = state_25485;
state_25485 = G__25510;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20398__auto__ = function(state_25485){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20398__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20398__auto____1.call(this,state_25485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20398__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20398__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___25502,ch))
})();
var state__20511__auto__ = (function (){var statearr_25501 = f__20510__auto__.call(null);
(statearr_25501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___25502);

return statearr_25501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___25502,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto__){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto__){
return (function (state_25531){
var state_val_25532 = (state_25531[(1)]);
if((state_val_25532 === (1))){
var inst_25526 = cljs.core.async.timeout.call(null,(3000));
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25531__$1,(2),inst_25526);
} else {
if((state_val_25532 === (2))){
var inst_25528 = (state_25531[(2)]);
var inst_25529 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25531__$1 = (function (){var statearr_25533 = state_25531;
(statearr_25533[(7)] = inst_25528);

return statearr_25533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25531__$1,inst_25529);
} else {
return null;
}
}
});})(c__20509__auto__))
;
return ((function (switch__20397__auto__,c__20509__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20398__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20398__auto____0 = (function (){
var statearr_25537 = [null,null,null,null,null,null,null,null];
(statearr_25537[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20398__auto__);

(statearr_25537[(1)] = (1));

return statearr_25537;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20398__auto____1 = (function (state_25531){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_25531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e25538){if((e25538 instanceof Object)){
var ex__20401__auto__ = e25538;
var statearr_25539_25541 = state_25531;
(statearr_25539_25541[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25542 = state_25531;
state_25531 = G__25542;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20398__auto__ = function(state_25531){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20398__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20398__auto____1.call(this,state_25531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20398__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20398__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto__))
})();
var state__20511__auto__ = (function (){var statearr_25540 = f__20510__auto__.call(null);
(statearr_25540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto__);

return statearr_25540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto__))
);

return c__20509__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25543){
var map__25550 = p__25543;
var map__25550__$1 = ((((!((map__25550 == null)))?((((map__25550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25550):map__25550);
var ed = map__25550__$1;
var formatted_exception = cljs.core.get.call(null,map__25550__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25550__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25550__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25552_25556 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25553_25557 = null;
var count__25554_25558 = (0);
var i__25555_25559 = (0);
while(true){
if((i__25555_25559 < count__25554_25558)){
var msg_25560 = cljs.core._nth.call(null,chunk__25553_25557,i__25555_25559);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25560);

var G__25561 = seq__25552_25556;
var G__25562 = chunk__25553_25557;
var G__25563 = count__25554_25558;
var G__25564 = (i__25555_25559 + (1));
seq__25552_25556 = G__25561;
chunk__25553_25557 = G__25562;
count__25554_25558 = G__25563;
i__25555_25559 = G__25564;
continue;
} else {
var temp__4657__auto___25565 = cljs.core.seq.call(null,seq__25552_25556);
if(temp__4657__auto___25565){
var seq__25552_25566__$1 = temp__4657__auto___25565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25552_25566__$1)){
var c__19159__auto___25567 = cljs.core.chunk_first.call(null,seq__25552_25566__$1);
var G__25568 = cljs.core.chunk_rest.call(null,seq__25552_25566__$1);
var G__25569 = c__19159__auto___25567;
var G__25570 = cljs.core.count.call(null,c__19159__auto___25567);
var G__25571 = (0);
seq__25552_25556 = G__25568;
chunk__25553_25557 = G__25569;
count__25554_25558 = G__25570;
i__25555_25559 = G__25571;
continue;
} else {
var msg_25572 = cljs.core.first.call(null,seq__25552_25566__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25572);

var G__25573 = cljs.core.next.call(null,seq__25552_25566__$1);
var G__25574 = null;
var G__25575 = (0);
var G__25576 = (0);
seq__25552_25556 = G__25573;
chunk__25553_25557 = G__25574;
count__25554_25558 = G__25575;
i__25555_25559 = G__25576;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25577){
var map__25580 = p__25577;
var map__25580__$1 = ((((!((map__25580 == null)))?((((map__25580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25580):map__25580);
var w = map__25580__$1;
var message = cljs.core.get.call(null,map__25580__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18344__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18344__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18344__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25588 = cljs.core.seq.call(null,plugins);
var chunk__25589 = null;
var count__25590 = (0);
var i__25591 = (0);
while(true){
if((i__25591 < count__25590)){
var vec__25592 = cljs.core._nth.call(null,chunk__25589,i__25591);
var k = cljs.core.nth.call(null,vec__25592,(0),null);
var plugin = cljs.core.nth.call(null,vec__25592,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25594 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25588,chunk__25589,count__25590,i__25591,pl_25594,vec__25592,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25594.call(null,msg_hist);
});})(seq__25588,chunk__25589,count__25590,i__25591,pl_25594,vec__25592,k,plugin))
);
} else {
}

var G__25595 = seq__25588;
var G__25596 = chunk__25589;
var G__25597 = count__25590;
var G__25598 = (i__25591 + (1));
seq__25588 = G__25595;
chunk__25589 = G__25596;
count__25590 = G__25597;
i__25591 = G__25598;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25588);
if(temp__4657__auto__){
var seq__25588__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25588__$1)){
var c__19159__auto__ = cljs.core.chunk_first.call(null,seq__25588__$1);
var G__25599 = cljs.core.chunk_rest.call(null,seq__25588__$1);
var G__25600 = c__19159__auto__;
var G__25601 = cljs.core.count.call(null,c__19159__auto__);
var G__25602 = (0);
seq__25588 = G__25599;
chunk__25589 = G__25600;
count__25590 = G__25601;
i__25591 = G__25602;
continue;
} else {
var vec__25593 = cljs.core.first.call(null,seq__25588__$1);
var k = cljs.core.nth.call(null,vec__25593,(0),null);
var plugin = cljs.core.nth.call(null,vec__25593,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25603 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25588,chunk__25589,count__25590,i__25591,pl_25603,vec__25593,k,plugin,seq__25588__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25603.call(null,msg_hist);
});})(seq__25588,chunk__25589,count__25590,i__25591,pl_25603,vec__25593,k,plugin,seq__25588__$1,temp__4657__auto__))
);
} else {
}

var G__25604 = cljs.core.next.call(null,seq__25588__$1);
var G__25605 = null;
var G__25606 = (0);
var G__25607 = (0);
seq__25588 = G__25604;
chunk__25589 = G__25605;
count__25590 = G__25606;
i__25591 = G__25607;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25608 = [];
var len__19414__auto___25611 = arguments.length;
var i__19415__auto___25612 = (0);
while(true){
if((i__19415__auto___25612 < len__19414__auto___25611)){
args25608.push((arguments[i__19415__auto___25612]));

var G__25613 = (i__19415__auto___25612 + (1));
i__19415__auto___25612 = G__25613;
continue;
} else {
}
break;
}

var G__25610 = args25608.length;
switch (G__25610) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25608.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19421__auto__ = [];
var len__19414__auto___25619 = arguments.length;
var i__19415__auto___25620 = (0);
while(true){
if((i__19415__auto___25620 < len__19414__auto___25619)){
args__19421__auto__.push((arguments[i__19415__auto___25620]));

var G__25621 = (i__19415__auto___25620 + (1));
i__19415__auto___25620 = G__25621;
continue;
} else {
}
break;
}

var argseq__19422__auto__ = ((((0) < args__19421__auto__.length))?(new cljs.core.IndexedSeq(args__19421__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19422__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25616){
var map__25617 = p__25616;
var map__25617__$1 = ((((!((map__25617 == null)))?((((map__25617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25617):map__25617);
var opts = map__25617__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25615){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25615));
});

//# sourceMappingURL=client.js.map?rel=1454621193367