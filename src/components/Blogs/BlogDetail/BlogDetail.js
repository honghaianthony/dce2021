import React from 'react';
import { Link } from 'react-router-dom';
import BlogPath from '../BlogPath';
import './BlogDetail.css';
import { BsCircle, BsFillStarFill } from 'react-icons/bs';
import { IoPersonCircleSharp } from 'react-icons/io5';

function BlogDetail() {
    return (
        <div className='blog-container'>
            <BlogPath />
            <div className='blog-detail'>
                <div className='blog-detail-main'>
                    <div className='blog-main'>
                        <div className='blog-author'>
                            <span>Tác giả:</span>
                            <span className='blog-author-name'>Nguyễn Văn A</span>
                            <i className='blog-time-icon'><BsCircle/></i>
                            <span className='blog-time'>28/10/2021</span>
                        </div>
                        <div className='blog-main-content'>
                            <div className='blog-cover-img'>
                                <img src='https://drive.google.com/uc?id=1xK7D-arCzMZIc23d__QbsjGBLVpZSQ0P' alt='blog-cover-img'/>
                            </div>
                            <div className='blog-content'>
                                <div className='blog-intro'>
                                    <h1>Cài Đặt Visual Studio Code Lập Trình C++ Dễ Như Ăn Kẹo</h1>
                                    <p>Mình đã viết một bài hướng dẫn cài Visual Studio Code để lập trình C++. Nhưng, dường như cách đó gây khó khăn cho các bạn khi thực hiện. Nên hôm nay mình sẽ trình bày một cách khác đơn giản hơn để các bạn có thể thực hiện thành công một cách dễ dàng.</p>
                                </div>
                                <h2>Một số yêu cầu của VSCode:</h2>
                                <ul>
                                    <li>CPU từ 1.6 GHz trở lên</li>
                                    <li>RAM từ 1 GB</li>
                                    <li>Có Microsoft .NET Framework 4.5.2</li>
                                </ul>
                                <h2>Hướng dẫn cài đặt vscode để lập trình C++ trên Windows</h2>
                                <ol>
                                    <li>
                                        <h3>Tải và cài đặt vscode</h3>
                                        <div>
                                            <p>
                                                Các bạn vào trang chủ vscode 
                                                <Link to='https://code.visualstudio.com/'> link này, </Link> 
                                                chọn phiên bản phù hợp với thiết bị của các bạn và tải về.
                                            </p>
                                            <p>Sau khi tài về, tiến hành chạy file cài đặt. Việc cài đặt rất đơn giản, chỉ cần Next – Next – Next là xong.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Cài extension C++</h3>
                                        <div>
                                            <p>Sau khi cài đặt, vscode sẽ có giao diện như thế này:</p>
                                            <div className='blog-content-img'>
                                                <img src='https://drive.google.com/uc?id=1Qr5XL6TprsaLEj0QocwCNWGKnScNyoO1' alt='ui-visual-studio'/>
                                            </div>
                                            <p>Các bạn ấn vào <span> Extensions </span> hoặc <span> Ctrl + Shift + X </span>, để mở giao diện như hình dưới.</p>
                                            <div className='blog-content-img'>
                                                <img src='https://drive.google.com/uc?id=1KpmiI1gbNY4J0bYBithrQe7oViv67Pck' alt='extensions'/>
                                            </div>
                                            <p>Tiếp theo các bạn gõ trên thanh tìm kiếm từ khóa <span> “C++” </span>, sau đó chọn extension <span> C/C++ </span> do <span> Microsoft </span> phát hành và ấn <span> Install </span> để cài đặt.</p>
                                            <p>Sau khi quá trình cài đặt hoàn tất bạn hãy <span> tắt VSCode đi </span> (bước này quan trọng nha).</p>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Cài đặt môi trường</h3>
                                        <div>
                                            <h4>Cài compile: MinGW</h4>
                                            <p>
                                                Các bạn vào
                                                <Link to='https://sourceforge.net/projects/mingw/'> link này, </Link> 
                                                và tải bộ cài MinGW về. Sau đó, các bạn mở file vừa tải về ra:
                                            </p>
                                            <div className='blog-content-img'>
                                                <img src='https://drive.google.com/uc?id=1Aub1mIEpwQhRk942TfCWk5TcETfqm2px' alt='mingw-1'/> 
                                                <br/>
                                                <img src='https://drive.google.com/uc?id=1KHeU9mfHcxKLvv1wg-tixP57HXaP5WTp' alt='mingw-2'/>
                                            </div>
                                            <p> 
                                                <span>Install </span>
                                                -> Chọn vị trí lưu compile nếu muốn hoặc để mặc định cho ló nhanh :), 
                                                <span> Continue</span>.
                                            </p>
                                            <p>Nhớ vị trí lưu compile, lúc sau sẽ cần dùng đến.</p>
                                            <div className='blog-content-img'>
                                                <img src='https://drive.google.com/uc?id=17d-jeKhY9EhWsV8QE0jGlmpVMbDexPEQ' alt='mingw-3'/>
                                            </div>
                                            <p>Đợi tool tải dữ liệu xong,<span> Continue</span>.</p>
                                            <div className='blog-content-img'>
                                                <img src='https://drive.google.com/uc?id=1hIRq3zlCL1MjrKq7gx3UaazrOjf_NUg-' alt='mingw-4'/>
                                            </div>
                                            <p>
                                                Đến đây, các bạn mark 2 dòng 
                                                <span> mingw32-base </span> và <span> mingw32-gcc-g++</span>.
                                                Sau đó, <span> Installation -> Apply Changes</span>. Rồi tiếp tục chờ...
                                            </p>
                                            <div className='blog-content-img'>
                                                <img src='https://drive.google.com/uc?id=1SlgE1OoF3NHBGvwfut8CEpAlimMilwhY' alt='mingw-5'/>
                                            </div>
                                            <p>Đến khi tool tải xong các dữ liệu cần thiết thì Close và thoát ra.</p>
                                            <h4>Cài đặt môi trường</h4>
                                            <p>
                                                <span>Mở của số System: </span>
                                                Chuột phải vào biểu tượng 
                                                <span> This PC -> Properties</span>, Windows Settings hiện ra, lướt xuống phần related settings, chọn 
                                                <span> Advanced system settings</span>. Hoặc vào Windows Search gõ 
                                                <span> Advanced system settings -> Environment Variables</span>.
                                            </p>
                                            <p>
                                                Trong mục <span>System variables</span>, chọn <span> Path -> Edit</span>.
                                            </p>
                                            <p>
                                                Chọn <span>New</span>. Tìm đường dẫn chứa thư mục bin của compile, copy, paste vào rồi nhấn OK.
                                            </p>
                                            <div className='blog-content-img'>
                                                <img src='https://drive.google.com/uc?id=1MtFvsGxu0CEpyGSq3bAZNVs1K6ln9gQ-' alt='enviroment-variables'/>
                                            </div>
                                            <p>
                                                Đường dẫn mặc định là: <span> C:\MinGW\bin</span>.
                                            </p>
                                            <p>Để kiểm tra đã cài Path thành công hay chưa bạn mở Command Prompt (cmd) và gõ:</p>
                                            <p className='blog-content-code'>g++ --version</p>
                                            <p>Nếu kết quả xuất hiện như hình dưới là bạn đã thành công, nếu không bạn hãy kiểm tra lại nhé.</p>
                                            <div className='blog-content-img'>
                                                <img src='https://drive.google.com/uc?id=1cNWLW82aucmUVkgTFzVNc9yRwQkolwg7' alt='test'/>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Biên tập và chạy chương trình trên terminal</h3>
                                        <div>
                                            <p>Chương trình đầu tiên: Hello World.</p>
                                            <p>
                                                Mở Vscode lên. Trên thanh công cụ:
                                                <span> File -> Open Folder </span> và mở hoặc tạo một thư mục mới (ví dụ Test chẳng hạn), sau đó
                                                <span>Select folder</span>.
                                            </p>
                                            <div className='blog-content-img'>
                                                <img src='https://drive.google.com/uc?id=14psDeOjHXcDURHw6R_BQtTOLR0fPxAzS' alt='new-file'/>
                                            </div>
                                            <p>
                                                Nhấn vào biểu tượng New File rồi tạo một file mới tên là HelloWorld.cpp và gõ đoạn code huyền thoại 
                                                <span> "Hello World!"</span>.
                                            </p>
                                            <p>
                                                <span>Ctrl + S </span> để lưu lại. Để biên dịch và chạy chương trình bạn vào terminal gõ dòng lệnh:
                                            </p>
                                            <p className='blog-content-code'>g++ -g HelloWorld.cpp -o HelloWorld.exe</p>
                                            <p>
                                                Hoặc nhắn tổ hợp
                                                <span> Ctrl + Shift + B -> C/C++: g++.exe build active file</span>. Hệ thống sẽ biên dịch
                                                <span> HelloWorld.cpp </span> và tạo ra file thực thi
                                                <span> HelloWorld.exe</span>.
                                            </p>
                                            <p>Để chạy chương trình bạn gõ lệnh:</p>
                                            <p className='blog-content-code'>./HelloWorld.exe</p>
                                            <p>Terminal sẽ hiện kết quả như hình dưới:</p>
                                            <div className='blog-content-img'>
                                                <img src='https://drive.google.com/uc?id=1zfuFcOQLSIuMkQpQL6sc5F5TFJaN487G' alt='terminal'/>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                                <h2>Kết</h2>
                                <p>Trên đây, mình đã giới thiệu với các bạn về Visual Studio Code và các cài đặt để lập trình C++. Hy vọng với cách này sẽ giúp các bạn thực hiện thành công.</p>
                                <p>Nếu thấy bài viết hữu ích hãy rate 5* :v</p>
                                <p>Hãy để lại comment để mình có thể hoàn thiện trong tương lai. Cảm ơn các bạn.</p>
                            </div>
                        </div>
                    </div>
                    <div className='blog-comment'>
                        <div className='blog-comment-rating'>
                            <i className='blog-item-rating'><BsFillStarFill/></i>
                            <i className='blog-item-rating'><BsFillStarFill/></i>
                            <i className='blog-item-rating'><BsFillStarFill/></i>
                            <i className='blog-item-rating'><BsFillStarFill/></i>
                            <i className='blog-item-rating'><BsFillStarFill/></i>
                            <p>5.0 <i>(4 đánh giá)</i></p>
                        </div>
                        <p className='blog-comment-number'>2 bình luận</p>
                        <div className='blog-comment-write'>
                            <div className='blog-comment-avatar'>
                                <IoPersonCircleSharp />
                            </div>
                            <div className='blog-comment-field'>
                                <textarea id='blog-cmt-field' name='place-write-comment' placeholder='Viết bình luận của bạn' rows={3}></textarea>
                                <div className='blog-comment-button'>
                                    <button type='button' className='blog-cmt-btn'>Đăng</button>      
                                </div>
                            </div>
                        </div>
                        <div className='blog-comment-others'>
                            <div className='blog-comment-other'>
                                <div className='blog-comment-user'>
                                    <div className='blog-comment-userinfo'>
                                        <div className='blog-comment-avatar'>
                                            <IoPersonCircleSharp />
                                        </div>
                                        <div className='blog-comment-name'>
                                            <p >Nguyễn Văn A</p>
                                        </div>
                                        <div className='blog-comment-date'>
                                            <p >30-10-2021</p>
                                        </div>
                                    </div>
                                    <div className='blog-comment-content'>
                                        <p>Bài viết hữu ích lắm</p>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-comment-other'>
                                <div className='blog-comment-user'>
                                    <div className='blog-comment-userinfo'>
                                        <div className='blog-comment-avatar'>
                                            <IoPersonCircleSharp />
                                        </div>
                                        <div className='blog-comment-name'>
                                            <p >Nguyễn Văn A</p>
                                        </div>
                                        <div className='blog-comment-date'>
                                            <p >30-10-2021</p>
                                        </div>
                                    </div>
                                    <div className='blog-comment-content'>
                                        <p>Bài viết hữu ích lắm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blog-sidebar'>
                    <div className='blog-author-info'>
                        <h3>TÁC GIẢ</h3>
                        <div className='author'>
                            <div className='author-avatar'>
                                <IoPersonCircleSharp />
                            </div>
                            <div className='author-name'>
                                <p>Nguyễn Văn A</p>
                            </div>
                            <div className='author-info'>
                                <p>Email: nguyenvana@gmail.com</p>
                                <p>Thành viên từ 15/08/2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;