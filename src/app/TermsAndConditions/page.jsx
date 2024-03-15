import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="py-10">
            <div className='p-5 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400' style={{ transform: "skewY(-3deg)" }}>
                <p className='text-white text-5xl font-bold uppercase'>Terms & Conditions</p>
            </div>
            <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
                <div>
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            AmiColo Terms and Conditions
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                            Last Updated: 12-02-2024
                        </p>
                    </div>
                    <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16 text-gray-700">
                        <h3 className="text-xl font-bold">Introduction</h3>
                        <p>
                            Welcome to AmiColo. The AmiColo website, located at [insert website address], is owned and operated by AmiColo Inc. ("we," "us," or "our"). By accessing our website, you agree to be bound by these Terms and Conditions ("Terms"), all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>

                        <h3 className="text-xl font-bold">Use License</h3>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on AmiColo's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
                        </p>
                        <ol className="list-decimal ml-8">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>Attempt to decompile or reverse engineer any software contained on AmiColo's website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials; or</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ol>
                        <p>
                            This license shall automatically terminate if you violate any of these restrictions and may be terminated by AmiColo at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                        </p>

                        <h3 className="text-xl font-bold">Account Registration</h3>
                        <p>
                            You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                        </p>

                        <h3 className="text-xl font-bold">Service Terms</h3>
                        <p>
                            AmiColo provides a platform for roommate matching and property listings. Users are responsible for ensuring the accuracy of the information they provide and for conducting their own due diligence on potential roommates or properties. AmiColo is not responsible for any disputes, damages, or legal implications resulting from agreements or interactions between users.
                        </p>

                        <h3 className="text-xl font-bold">Limitations</h3>
                        <p>
                            In no event shall AmiColo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AmiColo's website, even if AmiColo or an AmiColo authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>

                        <h3 className="text-xl font-bold">Accuracy of Materials</h3>
                        <p>
                            The materials appearing on AmiColo's website could include technical, typographical, or photographic errors. AmiColo does not warrant that any of the materials on its website are accurate, complete, or current. AmiColo may make changes to the materials contained on its website at any time without notice. However, AmiColo does not make any commitment to update the materials.
                        </p>

                        <h3 className="text-xl font-bold">Links</h3>
                        <p>
                            AmiColo has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AmiColo of the site. Use of any such linked website is at the user's own risk.
                        </p>

                        <h3 className="text-xl font-bold">Modifications</h3>
                        <p>
                            AmiColo may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms and Conditions.
                        </p>

                        <h3 className="text-xl font-bold">Governing Law</h3>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>

                        <h3 className="text-xl font-bold">Contact Us</h3>
                        <p>
                            If you have any questions about these Terms, please contact us at: <a href="mailto:support@amicolo.com" className="text-blue-500">support@amicolo.com</a>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;
