// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24476_24490 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24477_24491 = null;
var count__24478_24492 = (0);
var i__24479_24493 = (0);
while(true){
if((i__24479_24493 < count__24478_24492)){
var f_24494 = cljs.core._nth.call(null,chunk__24477_24491,i__24479_24493);
cljs.core.println.call(null,"  ",f_24494);

var G__24495 = seq__24476_24490;
var G__24496 = chunk__24477_24491;
var G__24497 = count__24478_24492;
var G__24498 = (i__24479_24493 + (1));
seq__24476_24490 = G__24495;
chunk__24477_24491 = G__24496;
count__24478_24492 = G__24497;
i__24479_24493 = G__24498;
continue;
} else {
var temp__4657__auto___24499 = cljs.core.seq.call(null,seq__24476_24490);
if(temp__4657__auto___24499){
var seq__24476_24500__$1 = temp__4657__auto___24499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24476_24500__$1)){
var c__19159__auto___24501 = cljs.core.chunk_first.call(null,seq__24476_24500__$1);
var G__24502 = cljs.core.chunk_rest.call(null,seq__24476_24500__$1);
var G__24503 = c__19159__auto___24501;
var G__24504 = cljs.core.count.call(null,c__19159__auto___24501);
var G__24505 = (0);
seq__24476_24490 = G__24502;
chunk__24477_24491 = G__24503;
count__24478_24492 = G__24504;
i__24479_24493 = G__24505;
continue;
} else {
var f_24506 = cljs.core.first.call(null,seq__24476_24500__$1);
cljs.core.println.call(null,"  ",f_24506);

var G__24507 = cljs.core.next.call(null,seq__24476_24500__$1);
var G__24508 = null;
var G__24509 = (0);
var G__24510 = (0);
seq__24476_24490 = G__24507;
chunk__24477_24491 = G__24508;
count__24478_24492 = G__24509;
i__24479_24493 = G__24510;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24511 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18356__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18356__auto__)){
return or__18356__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24511);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24511)))?cljs.core.second.call(null,arglists_24511):arglists_24511));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24480 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24481 = null;
var count__24482 = (0);
var i__24483 = (0);
while(true){
if((i__24483 < count__24482)){
var vec__24484 = cljs.core._nth.call(null,chunk__24481,i__24483);
var name = cljs.core.nth.call(null,vec__24484,(0),null);
var map__24485 = cljs.core.nth.call(null,vec__24484,(1),null);
var map__24485__$1 = ((((!((map__24485 == null)))?((((map__24485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24485):map__24485);
var doc = cljs.core.get.call(null,map__24485__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24485__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24512 = seq__24480;
var G__24513 = chunk__24481;
var G__24514 = count__24482;
var G__24515 = (i__24483 + (1));
seq__24480 = G__24512;
chunk__24481 = G__24513;
count__24482 = G__24514;
i__24483 = G__24515;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24480);
if(temp__4657__auto__){
var seq__24480__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24480__$1)){
var c__19159__auto__ = cljs.core.chunk_first.call(null,seq__24480__$1);
var G__24516 = cljs.core.chunk_rest.call(null,seq__24480__$1);
var G__24517 = c__19159__auto__;
var G__24518 = cljs.core.count.call(null,c__19159__auto__);
var G__24519 = (0);
seq__24480 = G__24516;
chunk__24481 = G__24517;
count__24482 = G__24518;
i__24483 = G__24519;
continue;
} else {
var vec__24487 = cljs.core.first.call(null,seq__24480__$1);
var name = cljs.core.nth.call(null,vec__24487,(0),null);
var map__24488 = cljs.core.nth.call(null,vec__24487,(1),null);
var map__24488__$1 = ((((!((map__24488 == null)))?((((map__24488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24488):map__24488);
var doc = cljs.core.get.call(null,map__24488__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24488__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24520 = cljs.core.next.call(null,seq__24480__$1);
var G__24521 = null;
var G__24522 = (0);
var G__24523 = (0);
seq__24480 = G__24520;
chunk__24481 = G__24521;
count__24482 = G__24522;
i__24483 = G__24523;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1454621192348