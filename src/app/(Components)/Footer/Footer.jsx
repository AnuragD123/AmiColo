import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-xl py-12 flex justify-around bg-gradient-to-b from-green-200 to-sky-200 font-light ">
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
                        <Link href={'/'}>
                            <Image
                                className='mr-3'
                                width={20}
                                height={20}
                                src="images/insta.svg"
                                alt="Instagram"
                            />
                        </Link>
                        <Link href={'/'}>
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
                <p className='text-sm'>FAQs</p>
                <p className='text-sm'>Privacy Policy</p>
                <p className='text-sm'>T&C</p>
                <p className='text-sm'>Disclaimers</p>
            </div>
            <div
                id="footer-logo"
                className="align-middle items-center hidden sm:flex"
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
