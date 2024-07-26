function Assess1(){
    const a=[
        {
            img:'/human.jpeg',
            name :'jyothi',
            feed :'good'
        },
        {
            img:'/human.jpeg',
            name :'mytreyi',
            feed :'good'
        }
    ]
    return(
        <div style={{display:'flex',padding:'50px',gap: '10px'}}>
            <div className="cart" style={{padding:'50px',border:'2px solid black',right:'10px',gap: '20px'}}>
                <img style={{height:'150px'}} src="/human.jpeg" alt=""></img>
                <h1 style={{ textAlign:'center' }}>Meghana</h1>
                <p style={{ textAlign:'center' }}>Busting Social media myths</p>
                <div style={{display:'flex',alignContent:'center'}}>
                <div>
                    <img style={{ borderRadius: '50%', objectFit: 'cover', width: '50px', height: '50px' }} src="/human.jpeg" />
                </div>
                <div>
                    <p >23shared connections</p>
                </div>
                </div>
                <button style={{objectFit: 'cover',width:'100%',height:'10%'}}>Connect</button>
            </div>
            <div className="cart" style={{padding:'50px',border:'2px solid black',right:'10px',gap: '20px'}}>
                <img src="/human.jpeg" alt=""></img>
                <h1 style={{ textAlign:'center' }}>Meghana</h1>
                <p style={{ textAlign:'center' }}>Busting Social media myths</p>
                <div style={{display:'flex',}}>
                <div>
                    <img style={{ borderRadius: '50%', objectFit: 'cover', width: '50px', height: '50px' }} src="/human.jpeg" />
                </div>
                <div>
                    <p>23shared connections</p>
                </div>
                </div>
                <button style={{objectFit: 'cover',width:'100%',height:'10%'}}>Connect</button>
            </div>
            <div className="cart" style={{padding:'50px',border:'2px solid black',right:'10px',gap: '20px'}}>
                <img src="/human.jpeg" alt=""></img>
                <h1 style={{ textAlign:'center' }}>Meghana</h1><p>Busting Social media myths</p>
                <div style={{display:'flex',}}>
                <div>
                    <img style={{ borderRadius: '50%', objectFit: 'cover', width: '50px', height: '50px' }} src="/human.jpeg" />
                </div>
                <div>
                    <p>23shared connections</p>
                </div>
                </div>
                <button style={{objectFit: 'cover',width:'100%',height:'10%'}}>Connect</button>
            </div>
            <hr></hr>
            <div>
                <h1>Hello</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {a.map((item, index) => (
                    <li style={{display:'flex'}} key={index}>
                        <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        <p>{item.name}</p><br/>
                        <p>{item.feed}</p>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}
export default Assess1;