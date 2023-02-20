;(function(){System.register(['./mobile-legacy.d4cbd80d.js'],function(exports){'use strict';var inject,onUnmounted,onDeactivated,onActivated;return{setters:[function(module){inject=module.i;onUnmounted=module.h;onDeactivated=module.j;onActivated=module.k;}],execute:function(){exports('o',onBeforeRouteLeave);/*!
        * vue-router v4.1.3
        * (c) 2022 Eduardo San Martin Morote
        * @license MIT
        */var NavigationType;(function(NavigationType){NavigationType["pop"]="pop";NavigationType["push"]="push";})(NavigationType||(NavigationType={}));var NavigationDirection;(function(NavigationDirection){NavigationDirection["back"]="back";NavigationDirection["forward"]="forward";NavigationDirection["unknown"]="";})(NavigationDirection||(NavigationDirection={}));/**
       * Enumeration with all possible types for navigation failures. Can be passed to
       * {@link isNavigationFailure} to check for specific failures.
       */var NavigationFailureType;(function(NavigationFailureType){/**
           * An aborted navigation is a navigation that failed because a navigation
           * guard returned `false` or called `next(false)`
           */NavigationFailureType[NavigationFailureType["aborted"]=4]="aborted";/**
           * A cancelled navigation is a navigation that failed because a more recent
           * navigation finished started (not necessarily finished).
           */NavigationFailureType[NavigationFailureType["cancelled"]=8]="cancelled";/**
           * A duplicated navigation is a navigation that failed because it was
           * initiated while already being at the exact same location.
           */NavigationFailureType[NavigationFailureType["duplicated"]=16]="duplicated";})(NavigationFailureType||(NavigationFailureType={}));/**
       * RouteRecord being rendered by the closest ancestor Router View. Used for
       * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
       * Location Matched
       *
       * @internal
       */const matchedRouteKey=Symbol('');function registerGuard(record,name,guard){const removeFromList=()=>{record[name].delete(guard);};onUnmounted(removeFromList);onDeactivated(removeFromList);onActivated(()=>{record[name].add(guard);});record[name].add(guard);}/**
       * Add a navigation guard that triggers whenever the component for the current
       * location is about to be left. Similar to {@link beforeRouteLeave} but can be
       * used in any component. The guard is removed when the component is unmounted.
       *
       * @param leaveGuard - {@link NavigationGuard}
       */function onBeforeRouteLeave(leaveGuard){const activeRecord=inject(matchedRouteKey,// to avoid warning
{}).value;if(!activeRecord){return;}registerGuard(activeRecord,'leaveGuards',leaveGuard);}}};});})();
