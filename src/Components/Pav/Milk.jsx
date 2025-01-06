import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo, addToCart, removeFromCart } from "../../../redux/todoslice";

export default function Milk() {
    const dispatch = useDispatch();
    const {data,cart} = useSelector((state) => state.todoskey);

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    const milkData = data.filter((item) => item.category === "milk");

    return (
        <div className="h-[100%] w-[100%] flex justify-center items-center">
            <div className="h-[110vh] w-[1285px] flex">
                <div className="navbar w-[245px] h-[100%] pt-[12px] overflow-scroll">
                        <div className='h-[70px] w-[100%]  flex justify-center items-center p-[12px] bg-[#ebffef] border-l-[4px] border-l-[#0c831f]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png" alt="" /></div>
                             <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Milk</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] flex justify-center items-center p-[12px] border'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center '>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Bread & Pav</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/954_1680251634382.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Flakes & Kids Cereals</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Muesil & Granola</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/584_1680251645977.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Oats</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Paneer & Tofu</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/123_1643384414434.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Crud & Yogurt</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/952_1657599773117.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Butter & More</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/2253_1694001802103.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Cheese</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1092_1643384330629.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Creame & Whitener</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/130_1643384401123.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Condensed Milk</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1140_1643384951835.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Vermicell</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1295_1643445863467.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Poha, Daliya & Other Grains</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/644_1690196367179.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Peanut Butter</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Energy Bars</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1184_1661407202472.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Lassi, Shakes & More</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1612_1666261789562.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Breakfast Mixes</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/609_1695366756108.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Honey & Chyawanprash</p></div>
                            </div>
                        </div>
                        <div className='h-[70px] w-[100%] border flex justify-center items-center p-[12px]'>
                            <div className='h-[48px] w-[235.2px] flex justify-center items-center'>
                                <div className='h-[48px] w-[48px] overflow-hidden bg-[#f8f8f8] rounded-[12px] pt-[8px]'><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1425_1643613254262.png" alt="" /></div>
                                <div className='h-[36px] w-[177.62px] overflow-hidden text-[14px] font-semibold font-sans flex justify-start items-center pl-[15px]'><p>Batter</p></div>
                            </div>
                        </div>
                    
                </div>
                <div className="product h-[110vh] w-[1020.2px] overflow-scroll">
                    <div className="h-[39.4px] w-[100%] flex justify-center items-center">
                        <div className="h-[27.4px] w-[936.2px]">
                            <h1 className="font-bold font-sans text-[16px]">Buy Milk Online</h1>
                        </div>
                    </div>
                    <div className="data h-[auto] w-[980px] bg-[#f4f6fb]">
                        <div className="singledata h-[auto] w-[100%] flex gap-[0px] flex-wrap">
                            {milkData.length > 0 ? (
                                milkData.map((e) => {
                                    const itemInCart = cart[e.id]?.quantity || 0;

                                    return (
                                        <div className="w-[182.43px] mt-[1%] mb-[0.5%] ml-[10px] rounded-[12px] bg-white flex items-center flex-col flex-wrap" key={e.id} >
                                            <div className="img h-[140px] w-[140px] border border-white">
                                                <img src={e.image} alt="" />
                                            </div>
                                            <div className="h-[130.6px] w-[182.43px] border border-white pl-[12px] pr-[12px] flex justify-evenly flex-col">
                                                <div className="name h-[36px] w-[158.43px] leading-[16.9px] overflow-hidden font-semibold text-[13.5px] font-sans">
                                                    <h1>{e.name}</h1>
                                                </div>
                                                <div className="h-[26px] w-[158.43px] flex justify-start items-center font-sans font-normal text-[12px]">
                                                    <p>{e.weight}</p>
                                                </div>
                                                <div className="h-[32.6px] w-[158.43px] flex justify-between items-center font-semibold text-[12px]">
                                                    <div>
                                                        <p>₹ {e.price}</p>
                                                        <p className="line-through text-[#828282]">{e.deleteprice}</p>
                                                    </div>

                                                    {itemInCart > 0 ? (
                                                        <div className="flex items-center border border-[#318616] rounded-[6px] bg-[#f7fff9] ">
                                                            <button onClick={() => dispatch(removeFromCart(e.id))}className="h-[31px] w-[26px]  rounded-[6px] text-[#318616]">-</button>
                                                            <span className="mx-2">{itemInCart}</span>
                                                            <button onClick={() => dispatch(addToCart(e))}className="h-[31px] w-[26px]  rounded-[6px] text-[#318616]">+ </button>
                                                        </div>
                                                    ) : (
                                                        <button onClick={() => dispatch(addToCart(e))} className="h-[31px] w-[66px] border border-[#318616] bg-[#f7fff9] rounded-[6px] font-sans flex justify-center items-center">ADD</button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="h-[75vh] w-[100%] flex justify-center items-center">
                                    <div>
                                        <center>
                                            <p className="text-3xl mt-[50px]">
                                                We couldn't find any matches!
                                            </p>
                                            <p className="text-[#919098] mt-[10px]">
                                                Please check the spelling or try searching something else
                                            </p>
                                        </center>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}