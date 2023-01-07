import React, { useState } from 'react'
import styles from "./Footer.module.css";

interface Props {
  footerStyle: any
}

function Footer({ footerStyle }: Props) {
  const [emailAddress, setEmailAdderess] = useState("");
  const [messages, setMessages] = useState("");
  const [loader, setLoader] = useState(false);

 return (
      <footer className={styles.main_footer}>
        <div className={styles.main_content}>
          <div className={styles.main_content_box}>
            <h2 className={styles.box_h2}>About us</h2>
            <div className={styles.box_content}>
              <p className={styles.left_content_p}>We are an e-commerce solution that brings the physical market online and make shopping easy. Embrasing the use of information technology.</p>
              <div className={styles.left_content_social}>
                <a className={styles.left_content_social_a} href=""><span className="fab fa-facebook-f"></span></a>
                <a className={styles.left_content_social_a} href=""><span className="fab fa-twitter"></span></a>
                <a className={styles.left_content_social_a} href=""><span className="fab fa-instagram"></span></a>
              </div>
            </div>
          </div>
          <div className={styles.main_content_box}>
            <h2 className={styles.box_h2}>Address</h2>
            <div className={styles.box_content}>
              <div className="place">
                <span className={styles.center_content_fas}></span>
                <span className={styles.center_content_text}>Lagos, Nigeria.</span>
              </div>
              <div className={styles.center_content_phone}>
                <span className="fas fa-phone-alt"></span>
                <span className={styles.center_content_text}>+234 8163 2214 55</span>
              </div>
              <div className="email">
                <span className="fas fa-envelope"></span>
                <span className={styles.center_content_text}>onukwubeizu@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={styles.main_content_box}>
            <h2 className={styles.box_h2}>Contact us</h2>
            <div className={styles.box_content}>
              <form action="#">
                <div className="email">
                  <div className={styles.right_form_text}>Email *</div>
                  <input type="text" className={styles.right_form_input} required  value={emailAddress} onChange={(e) => setEmailAdderess(e.target.value)}/>
                </div>
                 <div className={styles.right_form_msg}>
                   <div className={styles.right_form_text}>Message *</div>
                   <textarea cols={25} rows={2} className={styles.right_form_textarea} required value={messages} onChange={(e) => setMessages(e.target.value)}></textarea>
                 </div>
                 <div className={styles.right_form_btn}>
                   <button type="submit" className={styles.right_form_btn_button} style={{background: loader ? "#ccc" : "#cd9042"}}>Send</button>
                 </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <center className={styles.bottom_center}>
            <span className={styles.bottom_center_span}>Created by <a href="https://github.com/izuchukwu-eric" className={styles.bottom_center_a}>Izuchukwu Onukwube</a> | <span className="far fa-copyright"></span><span> 2023 All rights reserved.</span></span>
          </center>
        </div>
      </footer>
    
    );
}

export default Footer
