// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18356__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18356__auto__){
return or__18356__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18356__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18356__auto__)){
return or__18356__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23452_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23452_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23457 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23458 = null;
var count__23459 = (0);
var i__23460 = (0);
while(true){
if((i__23460 < count__23459)){
var n = cljs.core._nth.call(null,chunk__23458,i__23460);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23461 = seq__23457;
var G__23462 = chunk__23458;
var G__23463 = count__23459;
var G__23464 = (i__23460 + (1));
seq__23457 = G__23461;
chunk__23458 = G__23462;
count__23459 = G__23463;
i__23460 = G__23464;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23457);
if(temp__4657__auto__){
var seq__23457__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23457__$1)){
var c__19159__auto__ = cljs.core.chunk_first.call(null,seq__23457__$1);
var G__23465 = cljs.core.chunk_rest.call(null,seq__23457__$1);
var G__23466 = c__19159__auto__;
var G__23467 = cljs.core.count.call(null,c__19159__auto__);
var G__23468 = (0);
seq__23457 = G__23465;
chunk__23458 = G__23466;
count__23459 = G__23467;
i__23460 = G__23468;
continue;
} else {
var n = cljs.core.first.call(null,seq__23457__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23469 = cljs.core.next.call(null,seq__23457__$1);
var G__23470 = null;
var G__23471 = (0);
var G__23472 = (0);
seq__23457 = G__23469;
chunk__23458 = G__23470;
count__23459 = G__23471;
i__23460 = G__23472;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23511_23518 = cljs.core.seq.call(null,deps);
var chunk__23512_23519 = null;
var count__23513_23520 = (0);
var i__23514_23521 = (0);
while(true){
if((i__23514_23521 < count__23513_23520)){
var dep_23522 = cljs.core._nth.call(null,chunk__23512_23519,i__23514_23521);
topo_sort_helper_STAR_.call(null,dep_23522,(depth + (1)),state);

var G__23523 = seq__23511_23518;
var G__23524 = chunk__23512_23519;
var G__23525 = count__23513_23520;
var G__23526 = (i__23514_23521 + (1));
seq__23511_23518 = G__23523;
chunk__23512_23519 = G__23524;
count__23513_23520 = G__23525;
i__23514_23521 = G__23526;
continue;
} else {
var temp__4657__auto___23527 = cljs.core.seq.call(null,seq__23511_23518);
if(temp__4657__auto___23527){
var seq__23511_23528__$1 = temp__4657__auto___23527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23511_23528__$1)){
var c__19159__auto___23529 = cljs.core.chunk_first.call(null,seq__23511_23528__$1);
var G__23530 = cljs.core.chunk_rest.call(null,seq__23511_23528__$1);
var G__23531 = c__19159__auto___23529;
var G__23532 = cljs.core.count.call(null,c__19159__auto___23529);
var G__23533 = (0);
seq__23511_23518 = G__23530;
chunk__23512_23519 = G__23531;
count__23513_23520 = G__23532;
i__23514_23521 = G__23533;
continue;
} else {
var dep_23534 = cljs.core.first.call(null,seq__23511_23528__$1);
topo_sort_helper_STAR_.call(null,dep_23534,(depth + (1)),state);

var G__23535 = cljs.core.next.call(null,seq__23511_23528__$1);
var G__23536 = null;
var G__23537 = (0);
var G__23538 = (0);
seq__23511_23518 = G__23535;
chunk__23512_23519 = G__23536;
count__23513_23520 = G__23537;
i__23514_23521 = G__23538;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23515){
var vec__23517 = p__23515;
var x = cljs.core.nth.call(null,vec__23517,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23517,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23517,x,xs,get_deps__$1){
return (function (p1__23473_SHARP_){
return clojure.set.difference.call(null,p1__23473_SHARP_,x);
});})(vec__23517,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23551 = cljs.core.seq.call(null,provides);
var chunk__23552 = null;
var count__23553 = (0);
var i__23554 = (0);
while(true){
if((i__23554 < count__23553)){
var prov = cljs.core._nth.call(null,chunk__23552,i__23554);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23555_23563 = cljs.core.seq.call(null,requires);
var chunk__23556_23564 = null;
var count__23557_23565 = (0);
var i__23558_23566 = (0);
while(true){
if((i__23558_23566 < count__23557_23565)){
var req_23567 = cljs.core._nth.call(null,chunk__23556_23564,i__23558_23566);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23567,prov);

var G__23568 = seq__23555_23563;
var G__23569 = chunk__23556_23564;
var G__23570 = count__23557_23565;
var G__23571 = (i__23558_23566 + (1));
seq__23555_23563 = G__23568;
chunk__23556_23564 = G__23569;
count__23557_23565 = G__23570;
i__23558_23566 = G__23571;
continue;
} else {
var temp__4657__auto___23572 = cljs.core.seq.call(null,seq__23555_23563);
if(temp__4657__auto___23572){
var seq__23555_23573__$1 = temp__4657__auto___23572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23555_23573__$1)){
var c__19159__auto___23574 = cljs.core.chunk_first.call(null,seq__23555_23573__$1);
var G__23575 = cljs.core.chunk_rest.call(null,seq__23555_23573__$1);
var G__23576 = c__19159__auto___23574;
var G__23577 = cljs.core.count.call(null,c__19159__auto___23574);
var G__23578 = (0);
seq__23555_23563 = G__23575;
chunk__23556_23564 = G__23576;
count__23557_23565 = G__23577;
i__23558_23566 = G__23578;
continue;
} else {
var req_23579 = cljs.core.first.call(null,seq__23555_23573__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23579,prov);

var G__23580 = cljs.core.next.call(null,seq__23555_23573__$1);
var G__23581 = null;
var G__23582 = (0);
var G__23583 = (0);
seq__23555_23563 = G__23580;
chunk__23556_23564 = G__23581;
count__23557_23565 = G__23582;
i__23558_23566 = G__23583;
continue;
}
} else {
}
}
break;
}

var G__23584 = seq__23551;
var G__23585 = chunk__23552;
var G__23586 = count__23553;
var G__23587 = (i__23554 + (1));
seq__23551 = G__23584;
chunk__23552 = G__23585;
count__23553 = G__23586;
i__23554 = G__23587;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23551);
if(temp__4657__auto__){
var seq__23551__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23551__$1)){
var c__19159__auto__ = cljs.core.chunk_first.call(null,seq__23551__$1);
var G__23588 = cljs.core.chunk_rest.call(null,seq__23551__$1);
var G__23589 = c__19159__auto__;
var G__23590 = cljs.core.count.call(null,c__19159__auto__);
var G__23591 = (0);
seq__23551 = G__23588;
chunk__23552 = G__23589;
count__23553 = G__23590;
i__23554 = G__23591;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23551__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23559_23592 = cljs.core.seq.call(null,requires);
var chunk__23560_23593 = null;
var count__23561_23594 = (0);
var i__23562_23595 = (0);
while(true){
if((i__23562_23595 < count__23561_23594)){
var req_23596 = cljs.core._nth.call(null,chunk__23560_23593,i__23562_23595);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23596,prov);

var G__23597 = seq__23559_23592;
var G__23598 = chunk__23560_23593;
var G__23599 = count__23561_23594;
var G__23600 = (i__23562_23595 + (1));
seq__23559_23592 = G__23597;
chunk__23560_23593 = G__23598;
count__23561_23594 = G__23599;
i__23562_23595 = G__23600;
continue;
} else {
var temp__4657__auto___23601__$1 = cljs.core.seq.call(null,seq__23559_23592);
if(temp__4657__auto___23601__$1){
var seq__23559_23602__$1 = temp__4657__auto___23601__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23559_23602__$1)){
var c__19159__auto___23603 = cljs.core.chunk_first.call(null,seq__23559_23602__$1);
var G__23604 = cljs.core.chunk_rest.call(null,seq__23559_23602__$1);
var G__23605 = c__19159__auto___23603;
var G__23606 = cljs.core.count.call(null,c__19159__auto___23603);
var G__23607 = (0);
seq__23559_23592 = G__23604;
chunk__23560_23593 = G__23605;
count__23561_23594 = G__23606;
i__23562_23595 = G__23607;
continue;
} else {
var req_23608 = cljs.core.first.call(null,seq__23559_23602__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23608,prov);

var G__23609 = cljs.core.next.call(null,seq__23559_23602__$1);
var G__23610 = null;
var G__23611 = (0);
var G__23612 = (0);
seq__23559_23592 = G__23609;
chunk__23560_23593 = G__23610;
count__23561_23594 = G__23611;
i__23562_23595 = G__23612;
continue;
}
} else {
}
}
break;
}

var G__23613 = cljs.core.next.call(null,seq__23551__$1);
var G__23614 = null;
var G__23615 = (0);
var G__23616 = (0);
seq__23551 = G__23613;
chunk__23552 = G__23614;
count__23553 = G__23615;
i__23554 = G__23616;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23621_23625 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23622_23626 = null;
var count__23623_23627 = (0);
var i__23624_23628 = (0);
while(true){
if((i__23624_23628 < count__23623_23627)){
var ns_23629 = cljs.core._nth.call(null,chunk__23622_23626,i__23624_23628);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23629);

var G__23630 = seq__23621_23625;
var G__23631 = chunk__23622_23626;
var G__23632 = count__23623_23627;
var G__23633 = (i__23624_23628 + (1));
seq__23621_23625 = G__23630;
chunk__23622_23626 = G__23631;
count__23623_23627 = G__23632;
i__23624_23628 = G__23633;
continue;
} else {
var temp__4657__auto___23634 = cljs.core.seq.call(null,seq__23621_23625);
if(temp__4657__auto___23634){
var seq__23621_23635__$1 = temp__4657__auto___23634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23621_23635__$1)){
var c__19159__auto___23636 = cljs.core.chunk_first.call(null,seq__23621_23635__$1);
var G__23637 = cljs.core.chunk_rest.call(null,seq__23621_23635__$1);
var G__23638 = c__19159__auto___23636;
var G__23639 = cljs.core.count.call(null,c__19159__auto___23636);
var G__23640 = (0);
seq__23621_23625 = G__23637;
chunk__23622_23626 = G__23638;
count__23623_23627 = G__23639;
i__23624_23628 = G__23640;
continue;
} else {
var ns_23641 = cljs.core.first.call(null,seq__23621_23635__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23641);

var G__23642 = cljs.core.next.call(null,seq__23621_23635__$1);
var G__23643 = null;
var G__23644 = (0);
var G__23645 = (0);
seq__23621_23625 = G__23642;
chunk__23622_23626 = G__23643;
count__23623_23627 = G__23644;
i__23624_23628 = G__23645;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18356__auto__ = goog.require__;
if(cljs.core.truth_(or__18356__auto__)){
return or__18356__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23646__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23647__i = 0, G__23647__a = new Array(arguments.length -  0);
while (G__23647__i < G__23647__a.length) {G__23647__a[G__23647__i] = arguments[G__23647__i + 0]; ++G__23647__i;}
  args = new cljs.core.IndexedSeq(G__23647__a,0);
} 
return G__23646__delegate.call(this,args);};
G__23646.cljs$lang$maxFixedArity = 0;
G__23646.cljs$lang$applyTo = (function (arglist__23648){
var args = cljs.core.seq(arglist__23648);
return G__23646__delegate(args);
});
G__23646.cljs$core$IFn$_invoke$arity$variadic = G__23646__delegate;
return G__23646;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23650 = cljs.core._EQ_;
var expr__23651 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23650.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23651))){
var path_parts = ((function (pred__23650,expr__23651){
return (function (p1__23649_SHARP_){
return clojure.string.split.call(null,p1__23649_SHARP_,/[\/\\]/);
});})(pred__23650,expr__23651))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23650,expr__23651){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23653){if((e23653 instanceof Error)){
var e = e23653;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23653;

}
}})());
});
;})(path_parts,sep,root,pred__23650,expr__23651))
} else {
if(cljs.core.truth_(pred__23650.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23651))){
return ((function (pred__23650,expr__23651){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23650,expr__23651){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23650,expr__23651))
);

return deferred.addErrback(((function (deferred,pred__23650,expr__23651){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23650,expr__23651))
);
});
;})(pred__23650,expr__23651))
} else {
return ((function (pred__23650,expr__23651){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23650,expr__23651))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23654,callback){
var map__23657 = p__23654;
var map__23657__$1 = ((((!((map__23657 == null)))?((((map__23657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23657):map__23657);
var file_msg = map__23657__$1;
var request_url = cljs.core.get.call(null,map__23657__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23657,map__23657__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23657,map__23657__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto__){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto__){
return (function (state_23681){
var state_val_23682 = (state_23681[(1)]);
if((state_val_23682 === (7))){
var inst_23677 = (state_23681[(2)]);
var state_23681__$1 = state_23681;
var statearr_23683_23703 = state_23681__$1;
(statearr_23683_23703[(2)] = inst_23677);

(statearr_23683_23703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (1))){
var state_23681__$1 = state_23681;
var statearr_23684_23704 = state_23681__$1;
(statearr_23684_23704[(2)] = null);

(statearr_23684_23704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (4))){
var inst_23661 = (state_23681[(7)]);
var inst_23661__$1 = (state_23681[(2)]);
var state_23681__$1 = (function (){var statearr_23685 = state_23681;
(statearr_23685[(7)] = inst_23661__$1);

return statearr_23685;
})();
if(cljs.core.truth_(inst_23661__$1)){
var statearr_23686_23705 = state_23681__$1;
(statearr_23686_23705[(1)] = (5));

} else {
var statearr_23687_23706 = state_23681__$1;
(statearr_23687_23706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (6))){
var state_23681__$1 = state_23681;
var statearr_23688_23707 = state_23681__$1;
(statearr_23688_23707[(2)] = null);

(statearr_23688_23707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (3))){
var inst_23679 = (state_23681[(2)]);
var state_23681__$1 = state_23681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23681__$1,inst_23679);
} else {
if((state_val_23682 === (2))){
var state_23681__$1 = state_23681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23681__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23682 === (11))){
var inst_23673 = (state_23681[(2)]);
var state_23681__$1 = (function (){var statearr_23689 = state_23681;
(statearr_23689[(8)] = inst_23673);

return statearr_23689;
})();
var statearr_23690_23708 = state_23681__$1;
(statearr_23690_23708[(2)] = null);

(statearr_23690_23708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (9))){
var inst_23665 = (state_23681[(9)]);
var inst_23667 = (state_23681[(10)]);
var inst_23669 = inst_23667.call(null,inst_23665);
var state_23681__$1 = state_23681;
var statearr_23691_23709 = state_23681__$1;
(statearr_23691_23709[(2)] = inst_23669);

(statearr_23691_23709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (5))){
var inst_23661 = (state_23681[(7)]);
var inst_23663 = figwheel.client.file_reloading.blocking_load.call(null,inst_23661);
var state_23681__$1 = state_23681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23681__$1,(8),inst_23663);
} else {
if((state_val_23682 === (10))){
var inst_23665 = (state_23681[(9)]);
var inst_23671 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23665);
var state_23681__$1 = state_23681;
var statearr_23692_23710 = state_23681__$1;
(statearr_23692_23710[(2)] = inst_23671);

(statearr_23692_23710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (8))){
var inst_23661 = (state_23681[(7)]);
var inst_23667 = (state_23681[(10)]);
var inst_23665 = (state_23681[(2)]);
var inst_23666 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23667__$1 = cljs.core.get.call(null,inst_23666,inst_23661);
var state_23681__$1 = (function (){var statearr_23693 = state_23681;
(statearr_23693[(9)] = inst_23665);

(statearr_23693[(10)] = inst_23667__$1);

return statearr_23693;
})();
if(cljs.core.truth_(inst_23667__$1)){
var statearr_23694_23711 = state_23681__$1;
(statearr_23694_23711[(1)] = (9));

} else {
var statearr_23695_23712 = state_23681__$1;
(statearr_23695_23712[(1)] = (10));

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
});})(c__20509__auto__))
;
return ((function (switch__20397__auto__,c__20509__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20398__auto__ = null;
var figwheel$client$file_reloading$state_machine__20398__auto____0 = (function (){
var statearr_23699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23699[(0)] = figwheel$client$file_reloading$state_machine__20398__auto__);

(statearr_23699[(1)] = (1));

return statearr_23699;
});
var figwheel$client$file_reloading$state_machine__20398__auto____1 = (function (state_23681){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_23681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e23700){if((e23700 instanceof Object)){
var ex__20401__auto__ = e23700;
var statearr_23701_23713 = state_23681;
(statearr_23701_23713[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23714 = state_23681;
state_23681 = G__23714;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20398__auto__ = function(state_23681){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20398__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20398__auto____1.call(this,state_23681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20398__auto____0;
figwheel$client$file_reloading$state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20398__auto____1;
return figwheel$client$file_reloading$state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto__))
})();
var state__20511__auto__ = (function (){var statearr_23702 = f__20510__auto__.call(null);
(statearr_23702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto__);

return statearr_23702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto__))
);

return c__20509__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23715,callback){
var map__23718 = p__23715;
var map__23718__$1 = ((((!((map__23718 == null)))?((((map__23718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23718):map__23718);
var file_msg = map__23718__$1;
var namespace = cljs.core.get.call(null,map__23718__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23718,map__23718__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23718,map__23718__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23720){
var map__23723 = p__23720;
var map__23723__$1 = ((((!((map__23723 == null)))?((((map__23723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23723):map__23723);
var file_msg = map__23723__$1;
var namespace = cljs.core.get.call(null,map__23723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18344__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18344__auto__){
var or__18356__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18356__auto__)){
return or__18356__auto__;
} else {
var or__18356__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18356__auto____$1)){
return or__18356__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18344__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23725,callback){
var map__23728 = p__23725;
var map__23728__$1 = ((((!((map__23728 == null)))?((((map__23728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23728):map__23728);
var file_msg = map__23728__$1;
var request_url = cljs.core.get.call(null,map__23728__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23728__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20509__auto___23816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto___23816,out){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto___23816,out){
return (function (state_23798){
var state_val_23799 = (state_23798[(1)]);
if((state_val_23799 === (1))){
var inst_23776 = cljs.core.nth.call(null,files,(0),null);
var inst_23777 = cljs.core.nthnext.call(null,files,(1));
var inst_23778 = files;
var state_23798__$1 = (function (){var statearr_23800 = state_23798;
(statearr_23800[(7)] = inst_23778);

(statearr_23800[(8)] = inst_23777);

(statearr_23800[(9)] = inst_23776);

return statearr_23800;
})();
var statearr_23801_23817 = state_23798__$1;
(statearr_23801_23817[(2)] = null);

(statearr_23801_23817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23799 === (2))){
var inst_23781 = (state_23798[(10)]);
var inst_23778 = (state_23798[(7)]);
var inst_23781__$1 = cljs.core.nth.call(null,inst_23778,(0),null);
var inst_23782 = cljs.core.nthnext.call(null,inst_23778,(1));
var inst_23783 = (inst_23781__$1 == null);
var inst_23784 = cljs.core.not.call(null,inst_23783);
var state_23798__$1 = (function (){var statearr_23802 = state_23798;
(statearr_23802[(10)] = inst_23781__$1);

(statearr_23802[(11)] = inst_23782);

return statearr_23802;
})();
if(inst_23784){
var statearr_23803_23818 = state_23798__$1;
(statearr_23803_23818[(1)] = (4));

} else {
var statearr_23804_23819 = state_23798__$1;
(statearr_23804_23819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23799 === (3))){
var inst_23796 = (state_23798[(2)]);
var state_23798__$1 = state_23798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23798__$1,inst_23796);
} else {
if((state_val_23799 === (4))){
var inst_23781 = (state_23798[(10)]);
var inst_23786 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23781);
var state_23798__$1 = state_23798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23798__$1,(7),inst_23786);
} else {
if((state_val_23799 === (5))){
var inst_23792 = cljs.core.async.close_BANG_.call(null,out);
var state_23798__$1 = state_23798;
var statearr_23805_23820 = state_23798__$1;
(statearr_23805_23820[(2)] = inst_23792);

(statearr_23805_23820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23799 === (6))){
var inst_23794 = (state_23798[(2)]);
var state_23798__$1 = state_23798;
var statearr_23806_23821 = state_23798__$1;
(statearr_23806_23821[(2)] = inst_23794);

(statearr_23806_23821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23799 === (7))){
var inst_23782 = (state_23798[(11)]);
var inst_23788 = (state_23798[(2)]);
var inst_23789 = cljs.core.async.put_BANG_.call(null,out,inst_23788);
var inst_23778 = inst_23782;
var state_23798__$1 = (function (){var statearr_23807 = state_23798;
(statearr_23807[(12)] = inst_23789);

(statearr_23807[(7)] = inst_23778);

return statearr_23807;
})();
var statearr_23808_23822 = state_23798__$1;
(statearr_23808_23822[(2)] = null);

(statearr_23808_23822[(1)] = (2));


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
});})(c__20509__auto___23816,out))
;
return ((function (switch__20397__auto__,c__20509__auto___23816,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto____0 = (function (){
var statearr_23812 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23812[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto__);

(statearr_23812[(1)] = (1));

return statearr_23812;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto____1 = (function (state_23798){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_23798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e23813){if((e23813 instanceof Object)){
var ex__20401__auto__ = e23813;
var statearr_23814_23823 = state_23798;
(statearr_23814_23823[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23824 = state_23798;
state_23798 = G__23824;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto__ = function(state_23798){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto____1.call(this,state_23798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto___23816,out))
})();
var state__20511__auto__ = (function (){var statearr_23815 = f__20510__auto__.call(null);
(statearr_23815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto___23816);

return statearr_23815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto___23816,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23825,opts){
var map__23829 = p__23825;
var map__23829__$1 = ((((!((map__23829 == null)))?((((map__23829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23829):map__23829);
var eval_body__$1 = cljs.core.get.call(null,map__23829__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23829__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18344__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18344__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18344__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23831){var e = e23831;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23832_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23832_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23837){
var vec__23838 = p__23837;
var k = cljs.core.nth.call(null,vec__23838,(0),null);
var v = cljs.core.nth.call(null,vec__23838,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23839){
var vec__23840 = p__23839;
var k = cljs.core.nth.call(null,vec__23840,(0),null);
var v = cljs.core.nth.call(null,vec__23840,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23844,p__23845){
var map__24092 = p__23844;
var map__24092__$1 = ((((!((map__24092 == null)))?((((map__24092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24092):map__24092);
var opts = map__24092__$1;
var before_jsload = cljs.core.get.call(null,map__24092__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24092__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24092__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24093 = p__23845;
var map__24093__$1 = ((((!((map__24093 == null)))?((((map__24093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24093):map__24093);
var msg = map__24093__$1;
var files = cljs.core.get.call(null,map__24093__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24093__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24093__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20510__auto__ = (function (){var switch__20397__auto__ = ((function (c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24246){
var state_val_24247 = (state_24246[(1)]);
if((state_val_24247 === (7))){
var inst_24110 = (state_24246[(7)]);
var inst_24108 = (state_24246[(8)]);
var inst_24109 = (state_24246[(9)]);
var inst_24107 = (state_24246[(10)]);
var inst_24115 = cljs.core._nth.call(null,inst_24108,inst_24110);
var inst_24116 = figwheel.client.file_reloading.eval_body.call(null,inst_24115,opts);
var inst_24117 = (inst_24110 + (1));
var tmp24248 = inst_24108;
var tmp24249 = inst_24109;
var tmp24250 = inst_24107;
var inst_24107__$1 = tmp24250;
var inst_24108__$1 = tmp24248;
var inst_24109__$1 = tmp24249;
var inst_24110__$1 = inst_24117;
var state_24246__$1 = (function (){var statearr_24251 = state_24246;
(statearr_24251[(7)] = inst_24110__$1);

(statearr_24251[(8)] = inst_24108__$1);

(statearr_24251[(9)] = inst_24109__$1);

(statearr_24251[(10)] = inst_24107__$1);

(statearr_24251[(11)] = inst_24116);

return statearr_24251;
})();
var statearr_24252_24338 = state_24246__$1;
(statearr_24252_24338[(2)] = null);

(statearr_24252_24338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (20))){
var inst_24150 = (state_24246[(12)]);
var inst_24158 = figwheel.client.file_reloading.sort_files.call(null,inst_24150);
var state_24246__$1 = state_24246;
var statearr_24253_24339 = state_24246__$1;
(statearr_24253_24339[(2)] = inst_24158);

(statearr_24253_24339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (27))){
var state_24246__$1 = state_24246;
var statearr_24254_24340 = state_24246__$1;
(statearr_24254_24340[(2)] = null);

(statearr_24254_24340[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (1))){
var inst_24099 = (state_24246[(13)]);
var inst_24096 = before_jsload.call(null,files);
var inst_24097 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24098 = (function (){return ((function (inst_24099,inst_24096,inst_24097,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23841_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23841_SHARP_);
});
;})(inst_24099,inst_24096,inst_24097,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24099__$1 = cljs.core.filter.call(null,inst_24098,files);
var inst_24100 = cljs.core.not_empty.call(null,inst_24099__$1);
var state_24246__$1 = (function (){var statearr_24255 = state_24246;
(statearr_24255[(14)] = inst_24096);

(statearr_24255[(13)] = inst_24099__$1);

(statearr_24255[(15)] = inst_24097);

return statearr_24255;
})();
if(cljs.core.truth_(inst_24100)){
var statearr_24256_24341 = state_24246__$1;
(statearr_24256_24341[(1)] = (2));

} else {
var statearr_24257_24342 = state_24246__$1;
(statearr_24257_24342[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (24))){
var state_24246__$1 = state_24246;
var statearr_24258_24343 = state_24246__$1;
(statearr_24258_24343[(2)] = null);

(statearr_24258_24343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (39))){
var inst_24200 = (state_24246[(16)]);
var state_24246__$1 = state_24246;
var statearr_24259_24344 = state_24246__$1;
(statearr_24259_24344[(2)] = inst_24200);

(statearr_24259_24344[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (46))){
var inst_24241 = (state_24246[(2)]);
var state_24246__$1 = state_24246;
var statearr_24260_24345 = state_24246__$1;
(statearr_24260_24345[(2)] = inst_24241);

(statearr_24260_24345[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (4))){
var inst_24144 = (state_24246[(2)]);
var inst_24145 = cljs.core.List.EMPTY;
var inst_24146 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24145);
var inst_24147 = (function (){return ((function (inst_24144,inst_24145,inst_24146,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23842_SHARP_){
var and__18344__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23842_SHARP_);
if(cljs.core.truth_(and__18344__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23842_SHARP_));
} else {
return and__18344__auto__;
}
});
;})(inst_24144,inst_24145,inst_24146,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24148 = cljs.core.filter.call(null,inst_24147,files);
var inst_24149 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24150 = cljs.core.concat.call(null,inst_24148,inst_24149);
var state_24246__$1 = (function (){var statearr_24261 = state_24246;
(statearr_24261[(12)] = inst_24150);

(statearr_24261[(17)] = inst_24144);

(statearr_24261[(18)] = inst_24146);

return statearr_24261;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24262_24346 = state_24246__$1;
(statearr_24262_24346[(1)] = (16));

} else {
var statearr_24263_24347 = state_24246__$1;
(statearr_24263_24347[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (15))){
var inst_24134 = (state_24246[(2)]);
var state_24246__$1 = state_24246;
var statearr_24264_24348 = state_24246__$1;
(statearr_24264_24348[(2)] = inst_24134);

(statearr_24264_24348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (21))){
var inst_24160 = (state_24246[(19)]);
var inst_24160__$1 = (state_24246[(2)]);
var inst_24161 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24160__$1);
var state_24246__$1 = (function (){var statearr_24265 = state_24246;
(statearr_24265[(19)] = inst_24160__$1);

return statearr_24265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24246__$1,(22),inst_24161);
} else {
if((state_val_24247 === (31))){
var inst_24244 = (state_24246[(2)]);
var state_24246__$1 = state_24246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24246__$1,inst_24244);
} else {
if((state_val_24247 === (32))){
var inst_24200 = (state_24246[(16)]);
var inst_24205 = inst_24200.cljs$lang$protocol_mask$partition0$;
var inst_24206 = (inst_24205 & (64));
var inst_24207 = inst_24200.cljs$core$ISeq$;
var inst_24208 = (inst_24206) || (inst_24207);
var state_24246__$1 = state_24246;
if(cljs.core.truth_(inst_24208)){
var statearr_24266_24349 = state_24246__$1;
(statearr_24266_24349[(1)] = (35));

} else {
var statearr_24267_24350 = state_24246__$1;
(statearr_24267_24350[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (40))){
var inst_24221 = (state_24246[(20)]);
var inst_24220 = (state_24246[(2)]);
var inst_24221__$1 = cljs.core.get.call(null,inst_24220,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24222 = cljs.core.get.call(null,inst_24220,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24223 = cljs.core.not_empty.call(null,inst_24221__$1);
var state_24246__$1 = (function (){var statearr_24268 = state_24246;
(statearr_24268[(21)] = inst_24222);

(statearr_24268[(20)] = inst_24221__$1);

return statearr_24268;
})();
if(cljs.core.truth_(inst_24223)){
var statearr_24269_24351 = state_24246__$1;
(statearr_24269_24351[(1)] = (41));

} else {
var statearr_24270_24352 = state_24246__$1;
(statearr_24270_24352[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (33))){
var state_24246__$1 = state_24246;
var statearr_24271_24353 = state_24246__$1;
(statearr_24271_24353[(2)] = false);

(statearr_24271_24353[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (13))){
var inst_24120 = (state_24246[(22)]);
var inst_24124 = cljs.core.chunk_first.call(null,inst_24120);
var inst_24125 = cljs.core.chunk_rest.call(null,inst_24120);
var inst_24126 = cljs.core.count.call(null,inst_24124);
var inst_24107 = inst_24125;
var inst_24108 = inst_24124;
var inst_24109 = inst_24126;
var inst_24110 = (0);
var state_24246__$1 = (function (){var statearr_24272 = state_24246;
(statearr_24272[(7)] = inst_24110);

(statearr_24272[(8)] = inst_24108);

(statearr_24272[(9)] = inst_24109);

(statearr_24272[(10)] = inst_24107);

return statearr_24272;
})();
var statearr_24273_24354 = state_24246__$1;
(statearr_24273_24354[(2)] = null);

(statearr_24273_24354[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (22))){
var inst_24164 = (state_24246[(23)]);
var inst_24163 = (state_24246[(24)]);
var inst_24168 = (state_24246[(25)]);
var inst_24160 = (state_24246[(19)]);
var inst_24163__$1 = (state_24246[(2)]);
var inst_24164__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24163__$1);
var inst_24165 = (function (){var all_files = inst_24160;
var res_SINGLEQUOTE_ = inst_24163__$1;
var res = inst_24164__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24164,inst_24163,inst_24168,inst_24160,inst_24163__$1,inst_24164__$1,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23843_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23843_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24164,inst_24163,inst_24168,inst_24160,inst_24163__$1,inst_24164__$1,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24166 = cljs.core.filter.call(null,inst_24165,inst_24163__$1);
var inst_24167 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24168__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24167);
var inst_24169 = cljs.core.not_empty.call(null,inst_24168__$1);
var state_24246__$1 = (function (){var statearr_24274 = state_24246;
(statearr_24274[(23)] = inst_24164__$1);

(statearr_24274[(24)] = inst_24163__$1);

(statearr_24274[(25)] = inst_24168__$1);

(statearr_24274[(26)] = inst_24166);

return statearr_24274;
})();
if(cljs.core.truth_(inst_24169)){
var statearr_24275_24355 = state_24246__$1;
(statearr_24275_24355[(1)] = (23));

} else {
var statearr_24276_24356 = state_24246__$1;
(statearr_24276_24356[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (36))){
var state_24246__$1 = state_24246;
var statearr_24277_24357 = state_24246__$1;
(statearr_24277_24357[(2)] = false);

(statearr_24277_24357[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (41))){
var inst_24221 = (state_24246[(20)]);
var inst_24225 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24226 = cljs.core.map.call(null,inst_24225,inst_24221);
var inst_24227 = cljs.core.pr_str.call(null,inst_24226);
var inst_24228 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24227)].join('');
var inst_24229 = figwheel.client.utils.log.call(null,inst_24228);
var state_24246__$1 = state_24246;
var statearr_24278_24358 = state_24246__$1;
(statearr_24278_24358[(2)] = inst_24229);

(statearr_24278_24358[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (43))){
var inst_24222 = (state_24246[(21)]);
var inst_24232 = (state_24246[(2)]);
var inst_24233 = cljs.core.not_empty.call(null,inst_24222);
var state_24246__$1 = (function (){var statearr_24279 = state_24246;
(statearr_24279[(27)] = inst_24232);

return statearr_24279;
})();
if(cljs.core.truth_(inst_24233)){
var statearr_24280_24359 = state_24246__$1;
(statearr_24280_24359[(1)] = (44));

} else {
var statearr_24281_24360 = state_24246__$1;
(statearr_24281_24360[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (29))){
var inst_24164 = (state_24246[(23)]);
var inst_24200 = (state_24246[(16)]);
var inst_24163 = (state_24246[(24)]);
var inst_24168 = (state_24246[(25)]);
var inst_24166 = (state_24246[(26)]);
var inst_24160 = (state_24246[(19)]);
var inst_24196 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24199 = (function (){var all_files = inst_24160;
var res_SINGLEQUOTE_ = inst_24163;
var res = inst_24164;
var files_not_loaded = inst_24166;
var dependencies_that_loaded = inst_24168;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24164,inst_24200,inst_24163,inst_24168,inst_24166,inst_24160,inst_24196,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24198){
var map__24282 = p__24198;
var map__24282__$1 = ((((!((map__24282 == null)))?((((map__24282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24282):map__24282);
var namespace = cljs.core.get.call(null,map__24282__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24164,inst_24200,inst_24163,inst_24168,inst_24166,inst_24160,inst_24196,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24200__$1 = cljs.core.group_by.call(null,inst_24199,inst_24166);
var inst_24202 = (inst_24200__$1 == null);
var inst_24203 = cljs.core.not.call(null,inst_24202);
var state_24246__$1 = (function (){var statearr_24284 = state_24246;
(statearr_24284[(16)] = inst_24200__$1);

(statearr_24284[(28)] = inst_24196);

return statearr_24284;
})();
if(inst_24203){
var statearr_24285_24361 = state_24246__$1;
(statearr_24285_24361[(1)] = (32));

} else {
var statearr_24286_24362 = state_24246__$1;
(statearr_24286_24362[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (44))){
var inst_24222 = (state_24246[(21)]);
var inst_24235 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24222);
var inst_24236 = cljs.core.pr_str.call(null,inst_24235);
var inst_24237 = [cljs.core.str("not required: "),cljs.core.str(inst_24236)].join('');
var inst_24238 = figwheel.client.utils.log.call(null,inst_24237);
var state_24246__$1 = state_24246;
var statearr_24287_24363 = state_24246__$1;
(statearr_24287_24363[(2)] = inst_24238);

(statearr_24287_24363[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (6))){
var inst_24141 = (state_24246[(2)]);
var state_24246__$1 = state_24246;
var statearr_24288_24364 = state_24246__$1;
(statearr_24288_24364[(2)] = inst_24141);

(statearr_24288_24364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (28))){
var inst_24166 = (state_24246[(26)]);
var inst_24193 = (state_24246[(2)]);
var inst_24194 = cljs.core.not_empty.call(null,inst_24166);
var state_24246__$1 = (function (){var statearr_24289 = state_24246;
(statearr_24289[(29)] = inst_24193);

return statearr_24289;
})();
if(cljs.core.truth_(inst_24194)){
var statearr_24290_24365 = state_24246__$1;
(statearr_24290_24365[(1)] = (29));

} else {
var statearr_24291_24366 = state_24246__$1;
(statearr_24291_24366[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (25))){
var inst_24164 = (state_24246[(23)]);
var inst_24180 = (state_24246[(2)]);
var inst_24181 = cljs.core.not_empty.call(null,inst_24164);
var state_24246__$1 = (function (){var statearr_24292 = state_24246;
(statearr_24292[(30)] = inst_24180);

return statearr_24292;
})();
if(cljs.core.truth_(inst_24181)){
var statearr_24293_24367 = state_24246__$1;
(statearr_24293_24367[(1)] = (26));

} else {
var statearr_24294_24368 = state_24246__$1;
(statearr_24294_24368[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (34))){
var inst_24215 = (state_24246[(2)]);
var state_24246__$1 = state_24246;
if(cljs.core.truth_(inst_24215)){
var statearr_24295_24369 = state_24246__$1;
(statearr_24295_24369[(1)] = (38));

} else {
var statearr_24296_24370 = state_24246__$1;
(statearr_24296_24370[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (17))){
var state_24246__$1 = state_24246;
var statearr_24297_24371 = state_24246__$1;
(statearr_24297_24371[(2)] = recompile_dependents);

(statearr_24297_24371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (3))){
var state_24246__$1 = state_24246;
var statearr_24298_24372 = state_24246__$1;
(statearr_24298_24372[(2)] = null);

(statearr_24298_24372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (12))){
var inst_24137 = (state_24246[(2)]);
var state_24246__$1 = state_24246;
var statearr_24299_24373 = state_24246__$1;
(statearr_24299_24373[(2)] = inst_24137);

(statearr_24299_24373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (2))){
var inst_24099 = (state_24246[(13)]);
var inst_24106 = cljs.core.seq.call(null,inst_24099);
var inst_24107 = inst_24106;
var inst_24108 = null;
var inst_24109 = (0);
var inst_24110 = (0);
var state_24246__$1 = (function (){var statearr_24300 = state_24246;
(statearr_24300[(7)] = inst_24110);

(statearr_24300[(8)] = inst_24108);

(statearr_24300[(9)] = inst_24109);

(statearr_24300[(10)] = inst_24107);

return statearr_24300;
})();
var statearr_24301_24374 = state_24246__$1;
(statearr_24301_24374[(2)] = null);

(statearr_24301_24374[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (23))){
var inst_24164 = (state_24246[(23)]);
var inst_24163 = (state_24246[(24)]);
var inst_24168 = (state_24246[(25)]);
var inst_24166 = (state_24246[(26)]);
var inst_24160 = (state_24246[(19)]);
var inst_24171 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24173 = (function (){var all_files = inst_24160;
var res_SINGLEQUOTE_ = inst_24163;
var res = inst_24164;
var files_not_loaded = inst_24166;
var dependencies_that_loaded = inst_24168;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24164,inst_24163,inst_24168,inst_24166,inst_24160,inst_24171,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24172){
var map__24302 = p__24172;
var map__24302__$1 = ((((!((map__24302 == null)))?((((map__24302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24302):map__24302);
var request_url = cljs.core.get.call(null,map__24302__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24164,inst_24163,inst_24168,inst_24166,inst_24160,inst_24171,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24174 = cljs.core.reverse.call(null,inst_24168);
var inst_24175 = cljs.core.map.call(null,inst_24173,inst_24174);
var inst_24176 = cljs.core.pr_str.call(null,inst_24175);
var inst_24177 = figwheel.client.utils.log.call(null,inst_24176);
var state_24246__$1 = (function (){var statearr_24304 = state_24246;
(statearr_24304[(31)] = inst_24171);

return statearr_24304;
})();
var statearr_24305_24375 = state_24246__$1;
(statearr_24305_24375[(2)] = inst_24177);

(statearr_24305_24375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (35))){
var state_24246__$1 = state_24246;
var statearr_24306_24376 = state_24246__$1;
(statearr_24306_24376[(2)] = true);

(statearr_24306_24376[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (19))){
var inst_24150 = (state_24246[(12)]);
var inst_24156 = figwheel.client.file_reloading.expand_files.call(null,inst_24150);
var state_24246__$1 = state_24246;
var statearr_24307_24377 = state_24246__$1;
(statearr_24307_24377[(2)] = inst_24156);

(statearr_24307_24377[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (11))){
var state_24246__$1 = state_24246;
var statearr_24308_24378 = state_24246__$1;
(statearr_24308_24378[(2)] = null);

(statearr_24308_24378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (9))){
var inst_24139 = (state_24246[(2)]);
var state_24246__$1 = state_24246;
var statearr_24309_24379 = state_24246__$1;
(statearr_24309_24379[(2)] = inst_24139);

(statearr_24309_24379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (5))){
var inst_24110 = (state_24246[(7)]);
var inst_24109 = (state_24246[(9)]);
var inst_24112 = (inst_24110 < inst_24109);
var inst_24113 = inst_24112;
var state_24246__$1 = state_24246;
if(cljs.core.truth_(inst_24113)){
var statearr_24310_24380 = state_24246__$1;
(statearr_24310_24380[(1)] = (7));

} else {
var statearr_24311_24381 = state_24246__$1;
(statearr_24311_24381[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (14))){
var inst_24120 = (state_24246[(22)]);
var inst_24129 = cljs.core.first.call(null,inst_24120);
var inst_24130 = figwheel.client.file_reloading.eval_body.call(null,inst_24129,opts);
var inst_24131 = cljs.core.next.call(null,inst_24120);
var inst_24107 = inst_24131;
var inst_24108 = null;
var inst_24109 = (0);
var inst_24110 = (0);
var state_24246__$1 = (function (){var statearr_24312 = state_24246;
(statearr_24312[(7)] = inst_24110);

(statearr_24312[(8)] = inst_24108);

(statearr_24312[(9)] = inst_24109);

(statearr_24312[(10)] = inst_24107);

(statearr_24312[(32)] = inst_24130);

return statearr_24312;
})();
var statearr_24313_24382 = state_24246__$1;
(statearr_24313_24382[(2)] = null);

(statearr_24313_24382[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (45))){
var state_24246__$1 = state_24246;
var statearr_24314_24383 = state_24246__$1;
(statearr_24314_24383[(2)] = null);

(statearr_24314_24383[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (26))){
var inst_24164 = (state_24246[(23)]);
var inst_24163 = (state_24246[(24)]);
var inst_24168 = (state_24246[(25)]);
var inst_24166 = (state_24246[(26)]);
var inst_24160 = (state_24246[(19)]);
var inst_24183 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24185 = (function (){var all_files = inst_24160;
var res_SINGLEQUOTE_ = inst_24163;
var res = inst_24164;
var files_not_loaded = inst_24166;
var dependencies_that_loaded = inst_24168;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24164,inst_24163,inst_24168,inst_24166,inst_24160,inst_24183,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24184){
var map__24315 = p__24184;
var map__24315__$1 = ((((!((map__24315 == null)))?((((map__24315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24315):map__24315);
var namespace = cljs.core.get.call(null,map__24315__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24315__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24164,inst_24163,inst_24168,inst_24166,inst_24160,inst_24183,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24186 = cljs.core.map.call(null,inst_24185,inst_24164);
var inst_24187 = cljs.core.pr_str.call(null,inst_24186);
var inst_24188 = figwheel.client.utils.log.call(null,inst_24187);
var inst_24189 = (function (){var all_files = inst_24160;
var res_SINGLEQUOTE_ = inst_24163;
var res = inst_24164;
var files_not_loaded = inst_24166;
var dependencies_that_loaded = inst_24168;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24164,inst_24163,inst_24168,inst_24166,inst_24160,inst_24183,inst_24185,inst_24186,inst_24187,inst_24188,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24164,inst_24163,inst_24168,inst_24166,inst_24160,inst_24183,inst_24185,inst_24186,inst_24187,inst_24188,state_val_24247,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24190 = setTimeout(inst_24189,(10));
var state_24246__$1 = (function (){var statearr_24317 = state_24246;
(statearr_24317[(33)] = inst_24183);

(statearr_24317[(34)] = inst_24188);

return statearr_24317;
})();
var statearr_24318_24384 = state_24246__$1;
(statearr_24318_24384[(2)] = inst_24190);

(statearr_24318_24384[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (16))){
var state_24246__$1 = state_24246;
var statearr_24319_24385 = state_24246__$1;
(statearr_24319_24385[(2)] = reload_dependents);

(statearr_24319_24385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (38))){
var inst_24200 = (state_24246[(16)]);
var inst_24217 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24200);
var state_24246__$1 = state_24246;
var statearr_24320_24386 = state_24246__$1;
(statearr_24320_24386[(2)] = inst_24217);

(statearr_24320_24386[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (30))){
var state_24246__$1 = state_24246;
var statearr_24321_24387 = state_24246__$1;
(statearr_24321_24387[(2)] = null);

(statearr_24321_24387[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (10))){
var inst_24120 = (state_24246[(22)]);
var inst_24122 = cljs.core.chunked_seq_QMARK_.call(null,inst_24120);
var state_24246__$1 = state_24246;
if(inst_24122){
var statearr_24322_24388 = state_24246__$1;
(statearr_24322_24388[(1)] = (13));

} else {
var statearr_24323_24389 = state_24246__$1;
(statearr_24323_24389[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (18))){
var inst_24154 = (state_24246[(2)]);
var state_24246__$1 = state_24246;
if(cljs.core.truth_(inst_24154)){
var statearr_24324_24390 = state_24246__$1;
(statearr_24324_24390[(1)] = (19));

} else {
var statearr_24325_24391 = state_24246__$1;
(statearr_24325_24391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (42))){
var state_24246__$1 = state_24246;
var statearr_24326_24392 = state_24246__$1;
(statearr_24326_24392[(2)] = null);

(statearr_24326_24392[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (37))){
var inst_24212 = (state_24246[(2)]);
var state_24246__$1 = state_24246;
var statearr_24327_24393 = state_24246__$1;
(statearr_24327_24393[(2)] = inst_24212);

(statearr_24327_24393[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24247 === (8))){
var inst_24107 = (state_24246[(10)]);
var inst_24120 = (state_24246[(22)]);
var inst_24120__$1 = cljs.core.seq.call(null,inst_24107);
var state_24246__$1 = (function (){var statearr_24328 = state_24246;
(statearr_24328[(22)] = inst_24120__$1);

return statearr_24328;
})();
if(inst_24120__$1){
var statearr_24329_24394 = state_24246__$1;
(statearr_24329_24394[(1)] = (10));

} else {
var statearr_24330_24395 = state_24246__$1;
(statearr_24330_24395[(1)] = (11));

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
});})(c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20397__auto__,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto____0 = (function (){
var statearr_24334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24334[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto__);

(statearr_24334[(1)] = (1));

return statearr_24334;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto____1 = (function (state_24246){
while(true){
var ret_value__20399__auto__ = (function (){try{while(true){
var result__20400__auto__ = switch__20397__auto__.call(null,state_24246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20400__auto__;
}
break;
}
}catch (e24335){if((e24335 instanceof Object)){
var ex__20401__auto__ = e24335;
var statearr_24336_24396 = state_24246;
(statearr_24336_24396[(5)] = ex__20401__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24397 = state_24246;
state_24246 = G__24397;
continue;
} else {
return ret_value__20399__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto__ = function(state_24246){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto____1.call(this,state_24246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20398__auto__;
})()
;})(switch__20397__auto__,c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20511__auto__ = (function (){var statearr_24337 = f__20510__auto__.call(null);
(statearr_24337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20509__auto__);

return statearr_24337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20511__auto__);
});})(c__20509__auto__,map__24092,map__24092__$1,opts,before_jsload,on_jsload,reload_dependents,map__24093,map__24093__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20509__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24400,link){
var map__24403 = p__24400;
var map__24403__$1 = ((((!((map__24403 == null)))?((((map__24403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24403):map__24403);
var file = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__24403,map__24403__$1,file){
return (function (p1__24398_SHARP_,p2__24399_SHARP_){
if(cljs.core._EQ_.call(null,p1__24398_SHARP_,p2__24399_SHARP_)){
return p1__24398_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__24403,map__24403__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24409){
var map__24410 = p__24409;
var map__24410__$1 = ((((!((map__24410 == null)))?((((map__24410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24410):map__24410);
var match_length = cljs.core.get.call(null,map__24410__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24410__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24405_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24405_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24412 = [];
var len__19414__auto___24415 = arguments.length;
var i__19415__auto___24416 = (0);
while(true){
if((i__19415__auto___24416 < len__19414__auto___24415)){
args24412.push((arguments[i__19415__auto___24416]));

var G__24417 = (i__19415__auto___24416 + (1));
i__19415__auto___24416 = G__24417;
continue;
} else {
}
break;
}

var G__24414 = args24412.length;
switch (G__24414) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24412.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24419_SHARP_,p2__24420_SHARP_){
return cljs.core.assoc.call(null,p1__24419_SHARP_,cljs.core.get.call(null,p2__24420_SHARP_,key),p2__24420_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24421){
var map__24424 = p__24421;
var map__24424__$1 = ((((!((map__24424 == null)))?((((map__24424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24424):map__24424);
var f_data = map__24424__$1;
var file = cljs.core.get.call(null,map__24424__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24426,files_msg){
var map__24433 = p__24426;
var map__24433__$1 = ((((!((map__24433 == null)))?((((map__24433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24433):map__24433);
var opts = map__24433__$1;
var on_cssload = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24435_24439 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24436_24440 = null;
var count__24437_24441 = (0);
var i__24438_24442 = (0);
while(true){
if((i__24438_24442 < count__24437_24441)){
var f_24443 = cljs.core._nth.call(null,chunk__24436_24440,i__24438_24442);
figwheel.client.file_reloading.reload_css_file.call(null,f_24443);

var G__24444 = seq__24435_24439;
var G__24445 = chunk__24436_24440;
var G__24446 = count__24437_24441;
var G__24447 = (i__24438_24442 + (1));
seq__24435_24439 = G__24444;
chunk__24436_24440 = G__24445;
count__24437_24441 = G__24446;
i__24438_24442 = G__24447;
continue;
} else {
var temp__4657__auto___24448 = cljs.core.seq.call(null,seq__24435_24439);
if(temp__4657__auto___24448){
var seq__24435_24449__$1 = temp__4657__auto___24448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24435_24449__$1)){
var c__19159__auto___24450 = cljs.core.chunk_first.call(null,seq__24435_24449__$1);
var G__24451 = cljs.core.chunk_rest.call(null,seq__24435_24449__$1);
var G__24452 = c__19159__auto___24450;
var G__24453 = cljs.core.count.call(null,c__19159__auto___24450);
var G__24454 = (0);
seq__24435_24439 = G__24451;
chunk__24436_24440 = G__24452;
count__24437_24441 = G__24453;
i__24438_24442 = G__24454;
continue;
} else {
var f_24455 = cljs.core.first.call(null,seq__24435_24449__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24455);

var G__24456 = cljs.core.next.call(null,seq__24435_24449__$1);
var G__24457 = null;
var G__24458 = (0);
var G__24459 = (0);
seq__24435_24439 = G__24456;
chunk__24436_24440 = G__24457;
count__24437_24441 = G__24458;
i__24438_24442 = G__24459;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24433,map__24433__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24433,map__24433__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1454621192249