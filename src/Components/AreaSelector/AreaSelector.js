import React, {useState, useRef,useReducer, useEffect, useCallback} from 'react';
import Input from './Input';
import AsyncSelect from 'react-select/async';

function AreaSelector(){


    

  //Hooks

    const [currentAreaStartPosition,setCurrentAreaStartPosition]=useState({x:false,y:false});
    const [imgSrc,setImgSrc]=useState('');
    const [rectangleCounter,setRectangleCounter]=useReducer(x => x + 1, 0);
    const imgRef=useRef(null);
    const areaSelectorRef=useRef(null);
    const [rectangles,setRectangles]=useState([]);
    const [imgWidth,setImgWidth]=useState(<input type="hidden" name="img-width"/>);
    const [rectanglesInputs,setRectanglesInputs]=useState([]);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    //Hooks for AsyncSelect todo: change names
    const [inputValue, setValue] = useState('');

    


    const handleChange = useCallback( (value,key) => {
      const newRectanglesInputs=rectanglesInputs;
      const index=newRectanglesInputs.findIndex(item=>item.key+''===key+'');
      newRectanglesInputs.[index]=<input key={key} type="hidden" name="products[]" value={value.id}/>;
      setRectanglesInputs(newRectanglesInputs);
      //console.log(newRectanglesInputs);
      forceUpdate();
    },[rectanglesInputs]);
   
  
    const removeRectangle=useCallback((key)=>{
      
      const newRectangles = rectangles;
      const newRectanglesInputs=rectanglesInputs;
      const removeItemIndex=newRectangles.findIndex(item=>item.key+''===key+'');
      if (removeItemIndex > -1) {
        newRectangles.splice(removeItemIndex, 1);
        const removeRectangleInputsIndex=newRectanglesInputs.findIndex(item=>item.key+''===key+'');
        newRectanglesInputs.splice(removeRectangleInputsIndex, 1).filter(_ => true);
      } 

      

      setRectangles(newRectangles);
      setRectanglesInputs(newRectanglesInputs);
      forceUpdate();

    
    },[rectangles, rectanglesInputs]);

    useEffect(()=>{
       const fetchData= async ()=>{

        const idInput=document.querySelector('[name="id"]');
        const idInputValue=idInput.value;
        if(!idInputValue)
        {
          return;
        }
        
        const id=parseInt(idInputValue);
        const connection=await fetch(`https://ph.quickshop.pl/admin2/pl/moodboardy/getByIdJSON/${id}`);
        const response=await connection.json();
        if(response.img)
        {
          setImgSrc(`https://ph.quickshop.pl/public/moodboards/${response.img}`);
        }

        if(response.products)
        {
          const currentWidth=areaSelectorRef.current.offsetWidth;

          setImgWidth(currentWidth);    
                
          forceUpdate();
          const imageSizeRatio=parseFloat(currentWidth)/parseFloat(response.image_width);
          const newRectangles=rectangles;
          //console.log(response.image_width,imageSizeRatio);
          let i=0;
          for(const product of response.products)
          {
            const currentRectangleCounter=i;
            i++;
            
            const {width:savedWidth,height:savedHeight,position_x:savedLeft,position_y:savedTop, name, id}=product;

            const width=imageSizeRatio*parseFloat(savedWidth);
            const height=imageSizeRatio*parseFloat(savedHeight);
            const left=imageSizeRatio*parseFloat(savedLeft);
            const top=imageSizeRatio*parseFloat(savedTop);

            
            newRectangles.push(<div className="area-selectors__rectangle" key={currentRectangleCounter} style={{width:width,height:height,top:top,left:left}}>
            <input type="hidden" value={left} name="position_x[]"></input>
            <input type="hidden" value={top} name="position_y[]"></input>
            <input type="hidden" value={width} name="width[]"></input>
            <input type="hidden" value={height} name="height[]"></input>
  
  
            {/* <select className="area-selector__select" name="product[]"></select> */}
            <AsyncSelect
            className="area-selector__select"
            classNamePrefix="area-selector-select"
            defaultInputValue={name}
            defaultValue={id}
          cacheOptions
          getOptionLabel={e => e.text}
          getOptionValue={e => e.id}
          loadOptions={loadOptions}
          onChange={(value)=>{handleChange(value,currentRectangleCounter)}}
          onInputChange={handleInputChange}
        />
            <button onClick={(e)=>{removeRectangle(currentRectangleCounter)}} className="area-selector__remove-button" type="button">&times;</button>
          </div>);

//console.log(currentRectangleCounter);
const newRectanglesInputs=rectanglesInputs;
newRectanglesInputs.push(<input key={currentRectangleCounter} type="hidden" value={id} name="products[]"></input>);
setRectanglesInputs(newRectanglesInputs);

                  setRectangleCounter()


                  
                  forceUpdate();
                  
                }
                setRectangles(newRectangles);
        }
      }

      fetchData();
    },[]);

    const getMousePosition=(event)=>{
 // //console.log(imgRef.current.getBoundingClientRect());
        // on each click get current mouse location 
        const {left:offsetLeft,top:offsetTop}=imgRef.current.getBoundingClientRect();
        //console.log(offsetLeft,offsetTop);

        const currentCoord = { x: event.clientX-offsetLeft, y: event.clientY-offsetTop };
        return currentCoord;
        // add the newest mouse location to an array in state 

    };

   

    const handleAreaMouseDown=(event)=>{
      const mousePosition=getMousePosition(event);
     

        if(mousePosition.x>=0&&mousePosition.y>=0)
        {
          setCurrentAreaStartPosition(mousePosition);
        }
        
      };
      
      const handleAreaMouseUp=(event)=>{

        
        const mousePosition=getMousePosition(event);
        if(!event.target.classList.contains('area-selector')||!(mousePosition.x>=0&&mousePosition.y>=0) || !currentAreaStartPosition.x||!currentAreaStartPosition.y)
        {
    
          setCurrentAreaStartPosition({x:false,y:false})
          return;
        }

        const realStartPositionX=Math.min(currentAreaStartPosition.x,mousePosition.x);
        const realStopPositionX=Math.max(currentAreaStartPosition.x,mousePosition.x);
        const realStartPositionY=Math.min(currentAreaStartPosition.y,mousePosition.y);
        const realStopPositionY=Math.max(currentAreaStartPosition.y,mousePosition.y);



        const width=realStopPositionX-realStartPositionX;
        const height=realStopPositionY-realStartPositionY;
        const left=realStartPositionX;
        const top=realStartPositionY;

        

        const newRectangles=rectangles;
        const currentRectangleCounter=rectangleCounter;
        newRectangles.push(<div className="area-selectors__rectangle" key={currentRectangleCounter} style={{width:width,height:height,top:top,left:left}}>
          <input type="hidden" value={left} name="position_x[]"></input>
          <input type="hidden" value={top} name="position_y[]"></input>
          <input type="hidden" value={width} name="width[]"></input>
          <input type="hidden" value={height} name="height[]"></input>


          {/* <select className="area-selector__select" name="product[]"></select> */}
          <AsyncSelect
          className="area-selector__select"
          classNamePrefix="area-selector-select"
        cacheOptions
        defaultOptions
        getOptionLabel={e => e.text}
        getOptionValue={e => e.id}
        loadOptions={loadOptions}
        onChange={(value)=>{handleChange(value,currentRectangleCounter)}}
        onInputChange={handleInputChange}
      />
          <button onClick={(e)=>{removeRectangle(currentRectangleCounter)}} className="area-selector__remove-button" type="button">&times;</button>
        </div>)
      const newRectanglesInputs=rectanglesInputs;
      newRectanglesInputs.push(<input key={currentRectangleCounter} type="hidden" value="" name="products[]"></input>);
      setRectanglesInputs(newRectanglesInputs);

        setRectangleCounter()
        setRectangles(newRectangles);
        setCurrentAreaStartPosition({x:false,y:false})
        forceUpdate()

        };

      function handleImage(e){


        setRectangles([]);
        forceUpdate();
        var reader = new FileReader();
        reader.onload = function(event){
            setImgSrc( event.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
          setImgWidth(areaSelectorRef.current.offsetWidth);     
    }

     // handle input change event
  const handleInputChange = (value) => {

    setValue(value);

  };

 
  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(` https://ph.quickshop.pl/admin2/pl/produkty/json?react=1&term=${inputValue}&_type=query&q=${inputValue}`).then(res => res.json());
  };





    return (
        <div>
   
        <Input onChange={handleImage} type="file" title="Grafika" name="image" value=""></Input>
      <input type="hidden" name="imgSrc" value={imgSrc}/>     
        <div onMouseDown={handleAreaMouseDown} onMouseUp={handleAreaMouseUp} ref={areaSelectorRef} className="area-selector">

        <img alt="" ref={imgRef} src={imgSrc} />

        <div className="area-selectors__rectangles">
          {rectangles}
        </div>

      
        </div>
<div className="area-selector__hidden-product-data">

        {rectanglesInputs}
</div>
        <input type="hidden" name="img-width" value={imgWidth}/>
 
        </div>
    );
    
  }

  export default AreaSelector;