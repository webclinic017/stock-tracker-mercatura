import{j as o,R as c,a as d}from"./vendor.22b70689.js";const u=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}};u();const e=o.exports.jsx,s=o.exports.jsxs,p=()=>e("div",{className:"container",children:s("div",{className:"stats",children:[e("h2",{className:"stats__title",children:"Key Statistics"}),s("ul",{className:"stats__list",children:[s("li",{children:["Open ",e("span",{})]}),s("li",{children:["High ",e("span",{})]}),s("li",{children:["Low ",e("span",{})]}),s("li",{children:["Previous Close ",e("span",{})]})]}),s("ul",{className:"stats__list",children:[s("li",{children:["Day Range ",e("span",{})]}),s("li",{children:["52 Week Range ",e("span",{})]}),s("li",{children:["Market Cap ",e("span",{})]}),s("li",{children:["P/E Ratio ",e("span",{})]})]}),s("ul",{className:"stats__list",children:[s("li",{children:["Dividend Yield ",e("span",{})]}),s("li",{children:["Earnings Per Share ",e("span",{})]}),s("li",{children:["Volume ",e("span",{})]}),s("li",{children:["Total Avg. Volume ",e("span",{})]})]})]})});function h(){return e("div",{className:"App",children:e(p,{})})}c.render(e(d.StrictMode,{children:e(h,{})}),document.getElementById("root"));
