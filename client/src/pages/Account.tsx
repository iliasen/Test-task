import {NavLink} from "react-router-dom";
import {Button, Form, Image} from "react-bootstrap";
import {FormEvent, useEffect, useState} from "react";
import ReactPaginate from "react-paginate";

import '../styles/Account.css'

// @ts-ignore
import book from '../res/Account/book.png'
// @ts-ignore
import server from '../res/Account/server.png'
// @ts-ignore
import category from '../res/Account/category.png'
// @ts-ignore
import next from '../res/Account/next.png'

const Account = () => {
    let mass=[]

    for (let i = 0; i < 20; i++) {
        mass.push({
            id: i + 1,
            aic: 'АИС '+(i+1),
            param1: Math.floor(Math.random()* 150)+ 1 ,
            param2: Math.floor(Math.random() * 20) + 1,
            param3: Math.floor(Math.random() * 50) +1,
        });
    }
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Создайте функцию-обработчик, которая вызывается при изменении страницы с помощью ReactPaginate
    const handlePageChange = (data: any) => {
        // Установите текущую страницу в значение выбранной страницы из data
        setCurrentPage(data.selected);
    };

    // Вычислите общее количество страниц на основе длины массива mass и количества элементов на странице
    const pageCount = Math.ceil(mass.length / itemsPerPage);

    // Вычислите начальный и конечный индексы элементов для отображения на текущей странице
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const itemsToShow = mass.slice(startIndex, endIndex);


    const [activeButton, setActiveButton] = useState(null);

    const handleActiveButtonClick = (id) => {
        setActiveButton(id);
    };


    const [aciName,setAciName] = useState('');
    const [book,setBook] = useState(0);
    const [server,setServer] = useState(0);
    const [category,setCatrgory] = useState(0);


    const add = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        mass.push({
            id: Date.now(),
            aci: aciName,
            param1: book,
            param2: server,
            param3: category,
        })
        alert("Added")
    }

    const updivs = [
        <div>
            <div className='d-flex justify-content-between'>
            <span className='showSpan'>Список АИС</span>
            <div className='d-flex'>
                <span style={{color: "darkgrey"}}>Показывать по: </span>
                <div className='changeCount' onClick={()=>setItemsPerPage(2)}>2</div>
                <div className='changeCount' onClick={()=>setItemsPerPage(5)}>5</div>
                <div className='changeCount' onClick={()=>setItemsPerPage(7)}>7</div>
            </div>
        </div>
            <div>
                <div className="mt-5">
                    {itemsToShow.map((item) => (
                        <div key={item.id}>
                            <div className="component">
                                <h6>{item.aic}</h6>
                                <div className="d-flex">
                                    <div className='plashka'>
                                        <Image src={book} className='imgInPlashka'/>
                                        {item.param1}
                                        <Image src={next} className='imgInPlashka'/>
                                    </div>
                                    <div className='plashka'>
                                        <Image src={server} className='imgInPlashka'/>
                                        {item.param2}
                                        <Image src={next} className='imgInPlashka'/>
                                    </div>
                                    <div className='plashka'>
                                        <Image src={category} className='imgInPlashka'/>
                                        {item.param3}
                                        <Image src={next} className='imgInPlashka'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-center mt-2'>
                    <ReactPaginate
                        pageCount={pageCount}
                        //  функцию-обработчик в onPageChange
                        onPageChange={handlePageChange}
                        forcePage={currentPage}
                        //  стили и метки для кнопок и эллипсисов
                        containerClassName={"pagination"}
                        previousLabel={"Назад"}
                        nextLabel={"Вперед"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"}
                    />
                </div>
            </div>
        </div>,
        <div><strong original-font-size="16px" original-border-color="rgb(51, 51, 51)" original-background-color="rgba(0, 0, 0, 0)" original-background-image="none" original-color="rgb(51, 51, 51)" original-box-shadow="none" original-text-shadow="none" original-font-family="&quot;Open Sans&quot;" original-letter-spacing="0" original-line-height="28.8px">Единая система идентификации физических и юридических лиц (ЕС ИФЮЛ)</strong>
            – межведомственная информационная система, предназначенная для проведения идентификации и аутентификации физических и юридических лиц, в том числе их уполномоченных представителей, с применением средств криптографической защиты информации, реализующих функцию выработки электронной цифровой подписи с аппаратными методами защиты личного ключа.

        </div>,
        <div>
            <span className='showSpan'>Добавление АИС</span>
            <div className='mt-5'>
                <Form onSubmit={add}>
                    <div className='d-flex '>
                        <div>
                            <Form.Label className='findSpan'>Название АИС</Form.Label>
                            <Form.Control placeholder='Введите название АИС' style={{width: 450}} onChange={e=>setAciName(e.target.value)} required></Form.Control>
                        </div>
                        <div style={{marginLeft: 40}}>
                            <Form.Label className='findSpan'>Количество книг</Form.Label>
                            <Form.Control placeholder='Введите количество книг'  type='number' required style={{width: 450}} onChange={e=>setBook(Number(e.target.value))}></Form.Control>
                        </div>
                    </div>
                    <div className='d-flex mt-3 mb-5'>
                        <div>
                            <Form.Label className='findSpan'>Количество серверов</Form.Label>
                            <Form.Control placeholder='Введите количество серверов' type='number' required onChange={e=>setServer(Number(e.target.value))} style={{width: 450}}></Form.Control>
                        </div>
                        <div style={{marginLeft: 40}}>
                            <Form.Label className='findSpan'>Количество категорий</Form.Label>
                            <Form.Control placeholder='Введите количество категорий' type='number' onChange={e=>setCatrgory(Number(e.target.value))} required style={{width: 450}}></Form.Control>
                        </div>
                    </div>
                    <Button type='submit' >Добавить</Button>
                </Form>
            </div>
        </div>,
    ];

    const divs = [
        <div>
            <div>
                <span className='findSpan'>Выбор ИС/СР для внесения метаданных</span>
                <Form className='d-flex mt-2'>
                    <Form.Control placeholder='Выбор ИС/СР для внесения метаданных' className='find'></Form.Control>
                    <input type='reset' className='resetButton' value='x' ></input>
                    <Button>Показать</Button>
                </Form>
            </div>
            <div className="d-flex mt-5 mb-5 justify-content-between" style={{ width: 500 }}>
                {/* Добавьте onClick атрибут к каждой кнопке, который вызывает handleButtonClick с идентификатором кнопки */}
                <Button variant="outline-dark" onClick={() => handleActiveButtonClick(0)}>
                    Посмотреть ИС/ИР
                </Button>
                <Button variant="outline-dark" onClick={() => handleActiveButtonClick(1)}>
                    Доп. сведенья ИС/ИР
                </Button>
                <Button onClick={() => handleActiveButtonClick(2)}>+ Добавить</Button>
            </div>
            {/* Покажите div из массива divs по активной кнопке, если она не null */}
            {activeButton !== null && updivs[activeButton]}
        </div>,

        <div>Это div для Электронных сервисов</div>,
        <div>Это div для Потребления данных</div>,
        <div>Это div для Справочников</div>,
        <div>Это div для Отчётов</div>,
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
        setActiveButton(0);
    }, []);

    let navigation =[
        {
            id:1,
            text: 'Реестры'
        },
        {
            id:2,
            text: 'Электронные сервесы'
        },
        {
            id:3,
            text: 'Потребление данных'
        },
        {
            id:4,
            text: 'Cправочники'
        },
        {
            id:5,
            text: 'Отчёты'
        },
    ];

    const handleButtonClick = (index:number) => {
        setActiveIndex(index);
    };




    // let pageCount = 1;
    // const pages = [];
    // while (pageCount <= mass.length) {
    //     const page = mass.slice((pageCount - 1) * 10, pageCount * 10);
    //     pages.push(page);
    //     pageCount++;
    // }
    // console.log('Страницы массива mass:', pages);



    return (
        <div>
            <div className='navigation' style={{marginLeft: 100, marginRight: 100}}>
                <div className='toMainPage'>
                    <div className='arrow'/>
                    <NavLink to={'#home'} className='back'>Главная</NavLink>
                </div>
                <div className='d-flex'>
                    <div className='arrow'/>
                    <div className='back'>Личный кабинет</div>
                </div>
            </div>

            <h2 className='mt-5 mb-4' style={{marginLeft: 100, marginRight: 100}}>Личный кабинет</h2>
            <div className="d-flex mb-5" style={{marginLeft: 100, marginRight: 100}}>
                {navigation.map((item, index) => (
                    <div key={item.id}>
                        <button
                            className="changeFunc"
                            id={index === activeIndex ? "activeFunc" : ""}
                            onClick={() => handleButtonClick(index)}
                        >
                            {item.text}
                        </button>
                    </div>
                ))}
            </div>

            {/* Показ divs по активному индексу */}
            <div className='contentContainer'>
                {divs[activeIndex]}
            </div>
        </div>
    );
};

export default Account;