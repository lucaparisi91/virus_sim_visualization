'use client'
import styles from "./virus-sim.module.css"
import * as d3 from "d3";
import {useMemo, useRef, useState,useEffect} from 'react';




export function PeopleMap( {data, obstacles}) {

    const [mapShape,setMapShape ]=useState({width: 1800, height: 800})

    console.log(mapShape)
    
    const ref = useRef()


    useEffect( ()=>{
      const resizeObserver = new ResizeObserver( (entries)=>{ 
          const prop = entries[0].contentRect
          setMapShape( {
            width: prop.width, height:  prop.width*0.5
          }  )          
        }
      )
      resizeObserver.observe(ref.current)
      return ()=>resizeObserver.unobserve(ref.current)


    },[])
    
    const originalXExtent = [0,1]
    const originalYExtent = [0,1]

      
    const [xExtent,setXExtent] = useState( originalXExtent )
    const [yExtent,setYExtent] = useState( originalYExtent )

    const onresize = () => console.log("resize")
  
    const xScale = useMemo( () => {
          return d3.scaleLinear().domain(xExtent).range([0,mapShape.width]).nice() 
      } ,[xExtent,mapShape]        )
  
  
    const yScale= useMemo( () => d3.scaleLinear().domain(yExtent).range([mapShape.height,0]).nice() , [yExtent,mapShape] )

    const yScaleHeight= useMemo( () => d3.scaleLinear().domain(yExtent).range([0,mapShape.height]).nice() , [yExtent,mapShape] )
    

    const circles = data.map( (d,i)=>
      <circle className={styles.agent} cx={xScale(d.x)} cy={yScale(d.y)} key={ "agent"+ i} r={ xScale(0.02)} />
    )

    const obstacles_drawings = obstacles.map( (d,i)=>
      <rect className={styles.obstacle} x={xScale(d.x)} y={yScale(d.y)} width={xScale(d.width)} height={yScaleHeight(d.height)}   key={ "obstacle"+ i}  />
    )


    return <svg width="80vw" height={mapShape.height} className={styles.sim} ref={ref} >
          {circles}
          {obstacles_drawings}
          </svg>
          
  
  }