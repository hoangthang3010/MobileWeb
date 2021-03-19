import React, { useState } from 'react';

const Personal = () => {
    const [id, setId] =useState('')
  const [id2, setId2] =useState('')
  const [id3, setId3] =useState('')
  const [id4, setId4] =useState('')
  const [id5, setId5] =useState('')
  const [id6, setId6] =useState('')
  const [id7, setId7] =useState('')
  const onThree = () => {
    setId('1')
  }
  const onOne = () => {
      setId5('2')
      setId('')
  }
  const onSeven = () => {
    setId2('2')
  }
  const onNhan = () => {
    setId3('2')
  }
  const onBang = () => {
    setId4('2')
  }
  const onKq = () => {
    setId3('2')
  }
  const onZero = () => {
    setId6('2')
  }
  const onZero1 = () => {
    setId7('2')
  }
  console.log(id);
  return (
    <div className="product">
        <div style={{ 
            padding: '10px',
                      width: '200px', 
                      height: '311px', 
                      margin: '20px 200px', 
                      border: '1px solid black'
                    }}
        > 
          <span style={{marginLeft: '64px', fontWeight: '800'}}>CASIMO</span>
          <div style={{ fontWeight: '700',
              padding: '5px',
                        width: '180px',
                        height: '60px',
                        border: '1px solid black',
                        margin: '20px auto'
          }}>
              {
              
              id5 && id5 === '2' ? (<><a>1</a></>) : ''
            }
            {
              
              id6 && id6 === '1' ? (<><a>1</a></>) : ''
            }
            {
              
              id && id === '1' ? (<><a>3</a></>) : ''
            }
            
            {
              
              id3 && id3 === '2' ? (<><a> - </a></>) : ''
            }
            {
              
              id2 && id2 === '2' ? (<><a>8</a></>) : ''
            }
            {
              
              id7 && id7 === '2' ? (<><a>0</a></>) : ''
            }
            {
              
              id4 && id4 === '2' ? (<><a> = </a><a>0</a></>) : ''
            }
          </div>
          <div style={{display: 'flex', textAlign: 'center', marginTop: '20px'}}>
              <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>9</div>
              <div className='col-2' style={{border: '1px solid black',padding: '10px'}} onClick={onSeven}>8</div>
              <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>7</div>
              <div className='col-3' style={{border: '1px solid black',padding: '10px'}}>+</div>
              <div className='col-3' style={{border: '1px solid black',padding: '10px'}} onClick={onNhan}>-</div>
            </div>
            <div style={{display: 'flex', textAlign: 'center', marginTop: '20px'}}>
              <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>6</div>
              <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>5</div>
              <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>4</div>
              <div className='col-3' style={{border: '1px solid black',padding: '10px'}}>x</div>
              <div className='col-3' style={{border: '1px solid black',padding: '10px'}}>/</div>
            </div>
            <div style={{display: 'flex', textAlign: 'center', marginTop: '20px'}}>
              <a className='col-2' style={{border: '1px solid black',padding: '10px'}} onClick={onThree}>3</a>
              <div className='col-2' style={{border: '1px solid black',padding: '10px'}}>2</div>
              { id6 === '' ?
                <div className='col-3' style={{border: '1px solid black',padding: '10px'}}onClick={onZero}>1</div> :
                <div className='col-3' style={{border: '1px solid black',padding: '10px'}}onClick={onZero1}>1</div>
              }
                            { id6 === '' ?
                <div className='col-3' style={{border: '1px solid black',padding: '10px'}}onClick={onZero}>0</div> :
                <div className='col-3' style={{border: '1px solid black',padding: '10px'}}onClick={onZero1}>0</div>
              }
              <div className='col-3' style={{border: '1px solid black',padding: '10px'}} onClick={onBang}>=</div>
            </div>
            <hr/>
            <span style={{marginLeft:'32px'}}>Hoàng Minh Thắng</span>
        </div>
    </div>
  );
}
export default Personal
