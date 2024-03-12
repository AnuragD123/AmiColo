import Link from 'next/link';
import Image from 'next/image';
import './FooterStyle.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-xl py-12 flex justify-around bg-gradient-to-b from-green-200 to-sky-200 font-light max-sm:items-start ">
            <div className='flex justify-around max-sm:flex-wrap max-sm:justify-start max-sm:gap-5 max-sm:flex-col-reverse'>
                <div className="ContactUS-StayInTouch">
                    <div
                        id="ContactUS"
                        className=""
                    >
                        <h5 className="font-medium">Contact Us</h5>
                        <p className='text-sm'>+1 514-586-4586</p>
                        <p className='text-sm'>info@amicolo.com</p>
                    </div>
                    <div id="StayInTouch">
                        <h5 className="font-medium">Stay In Touch</h5>
                        <div className="image flex content-evenly">
                            <Link href={'https://www.instagram.com/ami.colo.mtl'}>
                                <Image
                                    className='mr-3'
                                    width={20}
                                    height={20}
                                    src="images/insta.svg"
                                    alt="Instagram"
                                />
                            </Link>
                            <Link href={'https://www.facebook.com/amicolomtl'}>
                                <Image
                                    className='mr-3 rounded-xl'
                                    width={20}
                                    height={20}
                                    src="images/fb.svg"
                                    alt="Facebook"
                                />
                            </Link>
                            <Link href={'/'}>
                                <Image
                                    className='mr-3'
                                    width={20}
                                    height={20}
                                    src="images/linkedin.svg"
                                    alt="LinkedIn"
                                />
                            </Link>
                            <Link href={'/'}>
                                <Image
                                    className='mr-3'
                                    width={20}
                                    height={20}
                                    src="images/YouTube.svg"
                                    alt="YouTube"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    id="Company Information"
                    className=""
                >
                    <h5 className="font-medium">Company Information</h5>
                    <Link href="/contact"><p className='text-sm'>Contact Us</p></Link>
                    <Link href="/FAQs"><p className='text-sm'>FAQs</p></Link>
                    <Link href="/privacy-policy"><p className='text-sm'>Privacy Policy</p></Link>
                    <Link href="/user-data-deletion-policy"><p className='text-sm'>User Data Deletion Policy</p></Link>

                    <Link href="/TermsAndConditions"><p className='text-sm'>T&C</p></Link>
                    {/* <a href="disclaimers"><p className='text-sm'>Disclaimers</p></a> */}
                </div>
            </div>


            <div
                id="footer-logo"
                className="align-middle items-center flex"
            >
                <Image
                    width={250}
                    height={250}
                    src="/images/amicolo-logo.png"
                    alt="Amicolo"
                />
            </div>
        </footer>
    );
};

export default Footer;
