module.exports = {
  confirm: function (personalInfoCharter, browser) {
    personalInfoCharter
      .assert.title('Personal information charter ')
      .assert.containsText('@bottomPageElement', 'We keep our Personal Information Charter under regular review.')
  },
  assertPersonalInfoCharterContent: function (personalInfoCharter, browser) {
    personalInfoCharter
    .expect.element('#textBody').text.to.equal( '   We are the Environment Agency and this information charter sets out the standards you can expect from us when we collect, hold or use your personal information. We are a data controller – a data controller determines how and why personal data is processed. We will follow all applicable UK and EU data protection laws in how we treat your personal information.  '  + 
    '     '  + 
    '   Contents  '  + 
    '   Your rights  '  + 
    '   Privacy notices  '  + 
    '   Storing and processing your data  '  + 
    '   Sharing your data  '  + 
    '   How to contact us  '  + 
    '   How to contact the Data Protection Officer  '  + 
    '   Independent advice on data protection and privacy  '  + 
    '   Changes to this personal information charter  '  + 
    '   Your rights  '  + 
    '   When we collect, hold, use or otherwise process your personal information, you have a right to be told:  '  + 
    '     '  +  
    '     '  + 
    '   what the data is being used for  '  + 
    '   why we’re legally able to process your data (also called the ‘lawful basis for processing’)  '  + 
    '   how long we will keep your data  '  + 
    '   who we will share it with  '  + 
    '   whether it will be transferred or accessed outside the UK or EU, and what legal protection it will have  '  + 
    '   who our Data Protection Officer is  '  + 
    '   about any rights you have, including the right to access your information or to object to its being used  '  + 
    '   about your right to complain to the Information Commissioner if you feel that your personal information has been mishandled  '  + 
    '   You are also entitled to have your personal information:  '  + 
    '     '  + 
    '   protected and kept secure  '  + 
    '   kept accurate and up to date  '  + 
    '   not used for purposes which are incompatible with those for which it was collected  '  + 
    '   kept only for as long as it is needed for the purpose for which it was collected (unless it must be kept as part of the historic record)  '  + 
    '   You have other rights under the General Data Protection Regulation (GDPR) and the Data Protection Act 2018 (DPA 2018). These are listed in full on the Information Commissioner’s website at:  '  + 
    '     '  + 
    '   https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/  '  + 
    '   See the ‘How to contact us’ section to find out how to exercise any of your rights under data protection legislation, or for any queries.  '  + 
    '     '  + 
    '   Privacy notices  '  + 
    '   When we provide a service that requires processing of personal information, we will also provide a detailed privacy notice for that service. This will give you the information that you have a right to be told under data protection legislation.  '  + 
    '     '  + 
    '   See the ‘How to contact us’ section if you need assistance with accessing a privacy notice for a particular service.  '  + 
    '     '  + 
    '   Storing and processing your data  '  + 
    '   We will only keep your personal data for as long as necessary, in line with statutory, regulatory, legal or security requirements, or based on historic value. Details will be on the relevant privacy notice.  '  + 
    '     '  + 
    '   We will store and dispose of your information securely and protect it to make sure only the people that need to have access to it.  '  + 
    '     '  + 
    '   We will only use your personal data in ways that are compatible with the purpose(s) set out in the relevant privacy notice. This includes contacting you to improve our service and to request consent to use your data for a new purpose.  '  + 
    '     '  + 
    '   We may be under an obligation to publish data on a public register, this will be made clear on the privacy notice for the services that this applies to.  '  + 
    '     '  + 
    '   In most cases your personal data will be stored and processed inside the European Economic Area (EEA). When your data will be transferred outside the EEA, we will inform you and let you know what safeguards are in place.  '  + 
    '     '  + 
    '   Sharing your data  '  + 
    '   We may share your data with other organisations working on our behalf. We will let you know when we are going to share your personal data and who with. We will ask for your permission if required. Details will be on the relevant privacy notice.  '  + 
    '     '  + 
    '   We will not make your personal data available for commercial use without your specific permission.  '  + 
    '     '  + 
    '   We may have to release personal data under the Environmental Information Regulations 2004 and the Freedom of Information Act 2000.  '  + 
    '     '  + 
    '   We will share your data if we are required to do so by law – for example, by court order, or to prevent fraud or other crime.  '  + 
    '     '  + 
    '   Processing personal data for law enforcement purposes  '  + 
    '   We process personal data for the prevention and detection of crime, and the prosecution and apprehension of offenders under Part 3 of the DPA 2018. This is part of our role as an environmental regulator.  '  + 
    '     '  + 
    '   How to contact us  '  + 
    '   If you are already in touch with one of our teams, you can direct your query through your normal contact.  '  + 
    '     '  + 
    '   This includes requests to exercise any of your rights under data protection legislation, including to:  '  + 
    '     '  + 
    '   get a copy of the personal data we have about you  '  + 
    '   correct inaccurate or incomplete personal data we have about you  '  + 
    '   request that we delete your personal data, or stop using it  '  + 
    '   restrict how we can use your personal data  '  + 
    '   Otherwise, use the following details for any of the above or any other general queries:  '  + 
    '     '  + 
    '   Email   '  + 
    '   enquiries@environment-agency.gov.uk   '  + 
    '   Telephone   '  + 
    '   03708 506 506  '  + 
    '     '  + 
    '   How to contact our Data Protection Officer  '  + 
    '   Contact our Data Protection Officer (DPO) with any concerns about how we handle your personal information.  '  + 
    '     '  + 
    '   The DPO is responsible for independent advice and monitoring of the Environment Agency’s use of personal information.  '  + 
    '     '  + 
    '   Data Protection Officer   '  + 
    '   Environment Agency   '  + 
    '   Horizon House   '  + 
    '   Deanery Road   '  + 
    '   Bristol   '  + 
    '   BS1 5AH  '  + 
    '     '  + 
    '   Email   '  + 
    '   dataprotection@environment-agency.gov.uk  '  + 
    '     '  + 
    '   Independent advice on data protection and privacy  '  + 
    '   Contact the Information Commissioner for independent advice about data protection, privacy and data-sharing issues.  '  + 
    '     '  + 
    '   Information Commissioner\'s Office   '  + 
    '   Wycliffe House   '  + 
    '   Water Lane   '  + 
    '   Wilmslow   '  + 
    '   Cheshire   '  + 
    '   SK9 5AF  '  + 
    '     '  + 
    '   Email   '  + 
    '   casework@ico.org.uk   '  + 
    '   Contact form   '  + 
    '   https://ico.org.uk/global/contact-us/email/  '  + 
    '     '  + 
    '   Telephone  '  + 
    '   0303 123 1113   '  + 
    '   Textphone   '  + 
    '   01625 545860  '  + 
    '     '  + 
    '   Changes to this personal information charter  '  + 
    '  We keep our Personal Information Charter under regular review. This Personal Information Charter was last updated on 10 July 2018.')
  }
}
