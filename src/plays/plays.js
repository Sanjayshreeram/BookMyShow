import React from "react";
import Poster from "../poster/poster";
import { Playsdisclosure } from "../disclosure/filterdisclosure";






 export const Plays=()=>{
    return(<>
    <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
            <div className="lg:w-8/12">
            <h2 className="text-2xl font-bold">
            Plays in Bhuvaneshwar
        </h2>
        <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3  my-3 lg:w-1/4">
            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IE1heQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355847-zwqmlcazqm-portrait.jpg" title="Standupcomedy" subtitle="Infinite mall" />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IE1heQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355847-zwqmlcazqm-portrait.jpg" title="Standupcomedy" subtitle="Infinite mall"/>
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IE1heQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355847-zwqmlcazqm-portrait.jpg" title="Standupcomedy" subtitle="Infinite mall"/>
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IE1heQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355847-zwqmlcazqm-portrait.jpg" title="Standupcomedy" subtitle="Infinite mall"/>
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IE1heQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355847-zwqmlcazqm-portrait.jpg" title="Standupcomedy" subtitle="Infinite mall"/>
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IE1heQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355847-zwqmlcazqm-portrait.jpg" title="Standupcomedy" subtitle="Infinite mall"/>
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IE1heQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355847-zwqmlcazqm-portrait.jpg" title="Standupcomedy" subtitle="Infinite mall"/>
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA2IE1heQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355847-zwqmlcazqm-portrait.jpg" title="Standupcomedy" subtitle="Infinite mall"/>
            </div>
           </div>
            </div>
       
           <div className="lg:w-1/4 ">
           <h2 className="text-2xl font-bold mb-4">

            Filters
        </h2>
        <div className="bg-gray-100 px-2 py-4 rounded-sm">
            <Playsdisclosure title="Date" tags={["Today","tomorrow"]}/>
            <Playsdisclosure title="Languages" tags={["Tamil","English"]}/>
            <Playsdisclosure title="Categories" tags={["Action","Thriller","Horror","comedy","Romance"]}/>

        </div>


        </div>
        </div>
        
    </div>
    
   


    
    
    
    </>)
}