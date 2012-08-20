/**
 * @author gkarthik
 */

var vis;//Global CytoscapeWeb Variable
var two_step=[];//Global variable to store nodes visible on the network
var global_hover="";//For showing hover bubble
var network_json=[];//Global variable storing JSON object from Gene Wiki Plus
var rootwise=[];//Dictionary storing node labels grouped by root nodes
var snp_lib=[];//Dictionary storing SNPs according to diseases
var highlighted_option="auto_option-1";//For autocomplete keyboard options
//Color Scheme for nodes
var color_scheme=[{"bg":"#FFF200","fg":"#6600C4"},{"bg":"#0073BD","fg":"#FF8E00"},{"bg":"#D4FA00","fg":"#B300CD"},{"bg":"#FF7F00","fg":"#0096BA"},{"bg":"#A63A00","fg":"#FFA473"},{"bg":"#A4008","fg":"#78EF6B"},{"bg":"#A300C","fg":"#7EEF6C"},{"bg":"#98A400","fg":"#F3FE72"},{"bg":"#5F007E","fg":"#EAFC00"},{"bg":"#FFDC40","fg":"#2A00C6"},{"bg":"#FF9973","fg":"#008146"}];
//Temporary color scheme variable
var color_schemeedit=[{"bg":"#FFF200","fg":"#6600C4"},{"bg":"#0073BD","fg":"#FF8E00"},{"bg":"#D4FA00","fg":"#B300CD"},{"bg":"#FF7F00","fg":"#0096BA"},{"bg":"#A63A00","fg":"#FFA473"},{"bg":"#A4008","fg":"#78EF6B"},{"bg":"#A300C","fg":"#7EEF6C"},{"bg":"#98A400","fg":"#F3FE72"},{"bg":"#5F007E","fg":"#EAFC00"},{"bg":"#FFDC40","fg":"#2A00C6"},{"bg":"#FF9973","fg":"#008146"}];
var data_CFH={"ask":{"query":{"q":"[[in_gene::P53]]","po":["is associated with disease"]},"results":{"count":32,"items":[{"properties":{"is_associated_with_disease":["Hepatocellular carcinoma","Papillary thyroid carcinoma","Choroid plexus papilloma","Gallbladder cancer","Telangiectasis","Endometrial cancer","Colorectal cancer","Prostate cancer","Hereditary breast ovarian cancer","Neutropenia","Primary open anle glaucoma","Non-small cell lung carcinoma","Breast cancer","Ovarian cancer","Leukemia","Choroid plexus carcinoma","Hydrocephalus"],"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs1042522","mUrlform":"Rs1042522","mDbkeyform":"Rs1042522","mUserCaseDBKey":"Rs1042522","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs1042522"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs11540652","mUrlform":"Rs11540652","mDbkeyform":"Rs11540652","mUserCaseDBKey":"Rs11540652","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs11540652"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912651","mUrlform":"Rs121912651","mDbkeyform":"Rs121912651","mUserCaseDBKey":"Rs121912651","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912651"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912652","mUrlform":"Rs121912652","mDbkeyform":"Rs121912652","mUserCaseDBKey":"Rs121912652","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912652"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912653","mUrlform":"Rs121912653","mDbkeyform":"Rs121912653","mUserCaseDBKey":"Rs121912653","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912653"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912656","mUrlform":"Rs121912656","mDbkeyform":"Rs121912656","mUserCaseDBKey":"Rs121912656","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912656"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912657","mUrlform":"Rs121912657","mDbkeyform":"Rs121912657","mUserCaseDBKey":"Rs121912657","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912657"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912662","mUrlform":"Rs121912662","mDbkeyform":"Rs121912662","mUserCaseDBKey":"Rs121912662","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912662"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912663","mUrlform":"Rs121912663","mDbkeyform":"Rs121912663","mUserCaseDBKey":"Rs121912663","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912663"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912666","mUrlform":"Rs121912666","mDbkeyform":"Rs121912666","mUserCaseDBKey":"Rs121912666","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912666"},{"properties":{"is_associated_with_disease":"Cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs12947788","mUrlform":"Rs12947788","mDbkeyform":"Rs12947788","mUserCaseDBKey":"Rs12947788","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs12947788"},{"properties":{"is_associated_with_disease":["Ovarian cancer","Breast cancer"],"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs12951053","mUrlform":"Rs12951053","mDbkeyform":"Rs12951053","mUserCaseDBKey":"Rs12951053","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs12951053"},{"properties":{"is_associated_with_disease":"Endometrial cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs1625895","mUrlform":"Rs1625895","mDbkeyform":"Rs1625895","mUserCaseDBKey":"Rs1625895","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs1625895"},{"properties":{"is_associated_with_disease":"Cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs1642785","mUrlform":"Rs1642785","mDbkeyform":"Rs1642785","mUserCaseDBKey":"Rs1642785","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs1642785"},{"properties":{"is_associated_with_disease":"Endometrial cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs17878362","mUrlform":"Rs17878362","mDbkeyform":"Rs17878362","mUserCaseDBKey":"Rs17878362","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs17878362"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs17884306","mUrlform":"Rs17884306","mDbkeyform":"Rs17884306","mUserCaseDBKey":"Rs17884306","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs17884306"},{"properties":{"is_associated_with_disease":"Breast cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs17887200","mUrlform":"Rs17887200","mDbkeyform":"Rs17887200","mUserCaseDBKey":"Rs17887200","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs17887200"},{"properties":{"is_associated_with_disease":"Ovarian cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs2078486","mUrlform":"Rs2078486","mDbkeyform":"Rs2078486","mUserCaseDBKey":"Rs2078486","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs2078486"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934271","mUrlform":"Rs28934271","mDbkeyform":"Rs28934271","mUserCaseDBKey":"Rs28934271","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934271"},{"properties":{"is_associated_with_disease":"Hepatocellular carcinoma","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934571","mUrlform":"Rs28934571","mDbkeyform":"Rs28934571","mUserCaseDBKey":"Rs28934571","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934571"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934572","mUrlform":"Rs28934572","mDbkeyform":"Rs28934572","mUserCaseDBKey":"Rs28934572","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934572"},{"properties":{"is_associated_with_disease":"Hepatoblastoma","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934573","mUrlform":"Rs28934573","mDbkeyform":"Rs28934573","mUserCaseDBKey":"Rs28934573","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934573"},{"properties":{"is_associated_with_disease":"Osteosarcoma","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934574","mUrlform":"Rs28934574","mDbkeyform":"Rs28934574","mUserCaseDBKey":"Rs28934574","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934574"},{"properties":{"is_associated_with_disease":"Osteosarcoma","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934575","mUrlform":"Rs28934575","mDbkeyform":"Rs28934575","mUserCaseDBKey":"Rs28934575","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934575"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934576","mUrlform":"Rs28934576","mDbkeyform":"Rs28934576","mUserCaseDBKey":"Rs28934576","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934576"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934577","mUrlform":"Rs28934577","mDbkeyform":"Rs28934577","mUserCaseDBKey":"Rs28934577","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934577"},{"properties":{"is_associated_with_disease":"Cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934578","mUrlform":"Rs28934578","mDbkeyform":"Rs28934578","mUserCaseDBKey":"Rs28934578","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934578"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934873","mUrlform":"Rs28934873","mDbkeyform":"Rs28934873","mUserCaseDBKey":"Rs28934873","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934873"},{"properties":{"is_associated_with_disease":"Breast cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934874","mUrlform":"Rs28934874","mDbkeyform":"Rs28934874","mUserCaseDBKey":"Rs28934874","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934874"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934875","mUrlform":"Rs28934875","mDbkeyform":"Rs28934875","mUserCaseDBKey":"Rs28934875","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934875"},{"properties":{"is_associated_with_disease":"Primary open anle glaucoma","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs59758982","mUrlform":"Rs59758982","mDbkeyform":"Rs59758982","mUserCaseDBKey":"Rs59758982","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs59758982"},{"properties":{"is_associated_with_disease":["Prostate cancer","Breast cancer"],"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs78378222","mUrlform":"Rs78378222","mDbkeyform":"Rs78378222","mUserCaseDBKey":"Rs78378222","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs78378222"}]},"result":"Success"}};
var data_CFH_disease={"ask":{"query":{"q":"[[P53]]","po":["is_associated_with_disease"]},"results":{"count":1,"items":[{"properties":{"is_associated_with_disease":["Telangiectasis","Lung cancer","Werner syndrome","Colorectal cancer","Retinoblastoma","Astrocytoma","Ovarian carcinoma","Ataxia telangiectasia","Melanoma","Hereditary breast ovarian cancer","Li-Fraumeni syndrome","Squamous cell carcinoma","Cockayne syndrome","Cervical cancer","Huntington's disease","Muscular atrophy","Endometrial cancer","Syndrome","Spinal muscular atrophy","Pancreatic cancer","Spindle cell hemangioma","Breast cancer","Renal cell carcinoma","Bloom syndrome","Leukemia"],"type":{"mTextform":"Pages with incomplete PMID references","mUrlform":"Pages_with_incomplete_PMID_references","mDbkeyform":"Pages_with_incomplete_PMID_references","mUserCaseDBKey":"Pages_with_incomplete_PMID_references","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Pages with incomplete PMID references","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"P53","mUrlform":"P53","mDbkeyform":"P53","mUserCaseDBKey":"P53","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=P53"}]},"result":"Success"}};

/*
 Function get_data(), to retrieve data from Gene Wiki Plus
 returns true if query returned successfully
 Example, 
 get_data("CDK2");
 
 */
function get_data(query_term)
{
	/*
	 * Converting to caps to retrieve data from Gene Wiki Plus
	 */
	if(highlighted_option=="auto_option-1")
	{
		query_term=$("#omni_query").val().toUpperCase();
	}
	/*
	 * If the text box is left empty throw error
	 */
	if(query_term=="")
	{
		$("#networkview").html("Please enter query term.");
		return false;
	}
	$("#omni_query").val(query_term);
	$("#autocomplete_options").css({'display':'none'});
	highlighted_option="auto_option-1";
	$("#networkview").html("Loading network on gene "+query_term+" ...");
	/*
	 * Retrieving data from Gene Wiki Plus
	 * Example Query syntax - http://genewikiplus.org/api.php?action=ask&q=[[in_gene::CDK2]]&po=is+associated+with+disease&format=json&callback=?"
	 */
	$.getJSON("http://genewikiplus.org/api.php?action=ask&q=[[in_gene::"+query_term+"]]&po=is+associated+with+disease&format=json&callback=?", function(data) {
		//var data=data_CFH;
		$("#view_choose").fadeIn();
		$("#export_options").fadeIn();
		color_schemeedit=[{"bg":"#FFF200","fg":"#6600C4"},{"bg":"#0073BD","fg":"#FF8E00"},{"bg":"#D4FA00","fg":"#B300CD"},{"bg":"#FF7F00","fg":"#0096BA"},{"bg":"#A63A00","fg":"#FFA473"},{"bg":"#A4008","fg":"#78EF6B"},{"bg":"#A300C","fg":"#7EEF6C"},{"bg":"#98A400","fg":"#F3FE72"},{"bg":"#5F007E","fg":"#EAFC00"},{"bg":"#FFDC40","fg":"#2A00C6"},{"bg":"#FF9973","fg":"#008146"}];
		generate_network(data,query_term);
		table_gene(data);
		return true;
	});		
}

/*
 Function to highlight terms in auto complete download
 returns true if option highlighted successfully
 highlight("auto_option2") - Highlights term 2 in auto complete drop down 
 */
function highlight(id)
{
	$(".auto_option").css({'padding':'5px','border':'0px','color':'#000'});
	if($("#"+id))
	{
		$("#"+id).css({'padding':'4px','border':'1px solid #333','color':'#333'});
		console.log(true);
		return true;	
	}
	else return false;
}

/*
 * Function to generate network and initialize global CytoscapeWeb variable vis
 * returns true if network constructed successfully
 */
function generate_network(data,query_term)
{
	/*
	 * For the cytoscaeWeb variable
	 */
	var div_id = "networkview";
                network_json = {
                        dataSchema: {
                    		nodes: [ { name: "label", type: "string" }, { name:"type", type:"string"}, { name:"weight", type:"integer"}, { name:"root_colour", type:"string"}
           		         	],
							edges: [ { name: "label", type: "string"},
							{ name: "weight", type: "integer"},
							{ name: "root_colour", type: "string"}						         
							]
                    	},
                        data: { }
                };
                var sizeMapper = { attrName: "weight",  minValue: 10, maxValue: 100, minAttrValue:10 };
                var visual_style = {
                    global: {
                        backgroundColor: "#FFFFFF"
                    },
                    nodes: {
                    	color:{ customMapper: { functionName: "customColor" }},
                        shape: { customMapper: { functionName: "customShape" }},
                        borderWidth: 3,
                        borderColor: "#666666",
                        labelFontColor:{ customMapper: { functionName: "customLabelColor" }},
                        opacity : 1, 
                        labelFontSize : { customMapper: { functionName: "customSize" } },
                        size:"auto",
                        selectionBorderColor : "#000",
                        selectionBorderWidth :2,
                        hoverBorderColor :"#000",
                        hoverBorderWidth :2,
                      },
                      edges:{
                      	color:{ customMapper: { functionName: "customEdgeColor" }},
                      	targetArrowShape: "CIRCLE"
                      }
                     };
  
                network_json["data"]["nodes"]=[];
                network_json["data"]["edges"]=[];
                var counter=1;
                var edgecounter=1;
         
                network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["query"]["q"].replace("[[in_gene::","").replace("]]",""),type:"q"});
                counter++;
                var secondary_centre;
                /*
                 * If non-relevant term is entered.
                 */
                if(data["ask"]["results"]==undefined)
                {
                	$("#networkview").html("The Gene supplied doesn't have any associated disease in our database.");
                	return false;
                }
                /*
                 * Initializing network_json with disease and SNP nodes
                 */
                for(var temp in data["ask"]["results"]["items"])
                {
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["title"]["mTextform"],type:"SNP"});
                	secondary_centre=counter;
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:"1",root_colour:""});
                	edgecounter++;
					counter++;
					if(data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"] instanceof Array)
					{
	            	for(var temp_disease in data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"])
                	{
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"][temp_disease],type:"disease"});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre),root_colour:""});
                	edgecounter++;
                	counter++;	
                	}
					}
					else
					{
						if(data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"])
						{
							network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"],type:"disease"});
                			network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre),root_colour:""});
                			edgecounter++;
                			counter++;		
						}
					}
                }
                /*
                 * Layout of the the network
                 */
                     var layout = {
  								  name:    "ForceDirected",
  								  options:{
  								  	mass: 200,
  								  	gravitation: -10,
  								  	tension:5,
  								  	maxTime: 100000,
  								  	//minDistance: 1000,
  								  	//maxDistance:1000,
  								  	autoStabilize :1,
  								  	weightAttr:"weight",
  								  	weightNorm:"invlinear",
  								  	minWeight:2,
  								  	maxWeight :20,
  								  	drag : 0.2 
  								  	 }    					
									};
				
				              
                var options = {
                    swfPath: "swf/CytoscapeWeb",
                    flashInstallerPath: "swf/playerProductInstall"
                };
                vis = new org.cytoscapeweb.Visualization(div_id, options);
                /*
                 * Custom Mappers for Cytoscape
                 */
                  vis["customSize"] = function (data) {
    								   		var size =25+Math.round(1.5*data["weight"]);
											return size;	
									   };
				  vis["customLabelColor"] = function (data) {
				  								for(var temp in color_scheme)
				  								{
				  									if(color_scheme[temp]["bg"]==data["root_colour"])
				  									{
				  										return color_scheme[temp]["fg"];
				  									}
				  								}
				  								//return "#000";
									   };
				  vis["customColor"] = function (data) {
				  							if(data["root_colour"]=="")
				  							{
				  								return "#FFF";	
				  							}
				  							else
				  							{
				  								return data["root_colour"];
				  							}
									   };
									   vis["customEdgeColor"] = function (data) {
				  							if(data["root_colour"]=="")
				  							{
				  								return "#FFF";	
				  							}
				  							else
				  							{
				  								return String(data["root_colour"]);
				  							}
									   };
				vis["customShape"] = function (data) {
    								   if(data["type"]=="disease")
    								   {
    								   	return "ELLIPSE";
    								   }
    								   else if(data["type"]=="SNP")
    								   {
    								   	return "RECTANGLE";
    								   }
    								   else if(data["type"]=="q")
    								   {
    								   	return "HEXAGON";
    								   }
    								   else if(data["type"]=="SNPcount")
    								   {
    								   		return "OCTAGON";
    								   }
    								   else
    								   {
    								   	return "ROUNDRECT";
    								   }
    								   				
									   };
				/*
				 * Ensuring no duplicate nodes in the network
				 */
				var counter_per_node=0;
                var counter_for_deletion=0;
                var repeated_node="";
                var unique_node="";
                for(var temp_node in network_json["data"]["nodes"])
                {
                	counter_per_node=0;
                	for(var temp_node2 in network_json["data"]["nodes"])
                	{
                		if(network_json["data"]["nodes"][temp_node]["label"]==network_json["data"]["nodes"][temp_node2]["label"])
                		{
                			counter_per_node++;
                		}
                	}
                	counter_for_deletion=0;
                	
                	if(counter_per_node>1)
                	{
                		
                		repeated_node=network_json["data"]["nodes"][temp_node]["id"];
                		
                		for(var delete_temp in network_json["data"]["nodes"])
                		{
                			
                			if(typeof network_json["data"]["nodes"][delete_temp]["id"] === "undefined")
                			{
                				//Do nothing | Not relevant
                			}	
                			else
                			{                			
                			if(network_json["data"]["nodes"][delete_temp]["label"]==network_json["data"]["nodes"][temp_node]["label"])
                			{
                			counter_for_deletion++;	                			
                			if(counter_for_deletion>1)
                			{
                				for(var delete_edge in network_json["data"]["edges"])
                				{            					
                					if(network_json["data"]["nodes"][delete_temp]["id"]==network_json["data"]["edges"][delete_edge]["target"])
                					{
                						network_json["data"]["edges"][delete_edge]["target"]=repeated_node;
                					}
                				}
                				network_json["data"]["nodes"].splice(delete_temp, 1);	                				
                			}
                			}
                			}	
                		}
                	}
                	
                }
				/*
				 * Genrating snp_lib, a dictionary storing SNps, disease wise.
				 */
				var to_display=[];
				var node_snp=[];
				var node_counter=0;
				snp_lib=[];
				for(var temp in network_json["data"]["nodes"])
				{
					node_snp=[];
					node_counter=0;
					if(network_json["data"]["nodes"][temp]["type"]!="SNP")
					{
						to_display.push(network_json["data"]["nodes"][temp]["id"]);
					}
					if(network_json["data"]["nodes"][temp]["type"]=="disease")
					{
						snp_lib.push({"parent_disease":network_json["data"]["nodes"][temp]["id"],"snp_sub":[],"snp_sub_label":[],"parent_disease_label":network_json["data"]["nodes"][temp]["label"]});
						for(var temp2 in network_json["data"]["edges"])
						{
							if(network_json["data"]["edges"][temp2]["target"]==network_json["data"]["nodes"][temp]["id"])
							{
								snp_lib[snp_lib.length-1]["snp_sub"].push(network_json["data"]["edges"][temp2]["source"]);
								for(var temp_lib in network_json["data"]["nodes"])
								{
									if(network_json["data"]["nodes"][temp_lib]["id"]==network_json["data"]["edges"][temp2]["source"])
									{
										snp_lib[snp_lib.length-1]["snp_sub_label"].push(network_json["data"]["nodes"][temp_lib]["label"]);		
									}
								}
								node_counter++;
								node_snp.push(network_json["data"]["edges"][temp2]["source"]);
							}
						}
						if(node_counter==1)
						{
							for(var temp_snp in node_snp)
							{
								to_display.push(node_snp[temp_snp]);
							}
						}
						if(node_counter>1)
						{
							network_json["data"]["nodes"].push({id:String(counter),label:"SNP("+node_counter+")",type:"SNPcount",weight:node_counter});
							network_json["data"]["edges"].push({id:String(edgecounter),source:"1",target:String(counter),weight:node_counter,root_colour:""});
							edgecounter++;
							network_json["data"]["edges"].push({id:String(edgecounter),source:String(counter),target:network_json["data"]["nodes"][temp]["id"],weight:node_counter,root_colour:""});
							network_json["data"]["nodes"][temp]["weight"]=node_counter;
							to_display.push(String(counter));
							counter++;
							edgecounter++;
						}
					}
				}	
				/*
				 * Code to retireve all diseases assocaited with the gene not just the ones with related SNPs.
				 */
                $.getJSON("http://genewikiplus.org/api.php?action=ask&q=[["+query_term+"]]&po=is_associated_with_disease&format=json&callback=?", function(data) {
				//data=data_CFH_disease;
				var flag_disease=0;
				if(data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"] instanceof Array)
				{
					for(var temp_disease in data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"])
					{
						flag_disease=0;
						for(var temp in network_json["data"]["nodes"])
						{
							if(network_json["data"]["nodes"][temp]["type"]=="disease")
							{
								if(data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"][temp_disease]==network_json["data"]["nodes"][temp]["label"])
								{
									flag_disease=1;
								}		
							}
						}
						if(flag_disease==0)
						{
								network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"][temp_disease],type:"disease"});
								network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:"1",root_colour:""});
								to_display.push(String(counter));
								counter++;
								edgecounter++;
						}
					}
				}
				else
				{
					flag_disease=0;
						for(var temp in network_json["data"]["nodes"])
						{
							if(network_json["data"]["nodes"][temp]["type"]=="disease")
							{
								if(data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"]==network_json["data"]["nodes"][temp]["label"])
								{
									flag_disease=1;
								}		
							}
						}
						if(flag_disease==0)
						{
								network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"],type:"disease"});
								network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:"1",root_colour:""});
								to_display.push(String(counter));
								counter++;
								edgecounter++;
						}					
				}
				/*
				 * Making nodes of parent categories and making a library, "rootwise" of root categoires.
				 */ 
				rootwise=[];
				var repeat_flag=0;
				var current_root;
				for(var temp in network_json["data"]["nodes"])
				{
					if(network_json["data"]["nodes"][temp]["type"]=="disease")
					{
						for(var temp_do in disease_ontology["disease_ontology_roots"])
						{
							if(disease_ontology["disease_ontology_roots"][temp_do]["do_name"]==network_json["data"]["nodes"][temp]["label"].toLowerCase()||disease_ontology["disease_ontology_roots"][temp_do]["do_name"]==network_json["data"]["nodes"][temp]["label"])
							{
								repeat_flag=0;
								for(var temp_root in rootwise)
								{	
									if(rootwise[temp_root]["root"]==disease_ontology["disease_ontology_roots"][temp_do]["do_roots"][0]["do_name"])
									{
										current_root=temp_root;
										repeat_flag=1;
									}
								}
								if(repeat_flag==0)
								{
									var colour=Math.floor(Math.random()*(color_schemeedit.length-1));
									network_json["data"]["nodes"].push({id:String(counter),label:disease_ontology["disease_ontology_roots"][temp_do]["do_roots"][0]["do_name"],type:"category",root_colour:String(color_schemeedit[colour]["bg"])});
									to_display.push(String(counter));
									rootwise.push({"root":disease_ontology["disease_ontology_roots"][temp_do]["do_roots"][0]["do_name"],"parent_id":String(counter),"sub_ids":[],"sub_labels":[],"root_colour":String(color_schemeedit[colour]["bg"])});
									color_schemeedit.splice(colour,1);
									rootwise[rootwise.length-1]["sub_ids"].push(String(network_json["data"]["nodes"][temp]["id"]));
									rootwise[rootwise.length-1]["sub_labels"].push(network_json["data"]["nodes"][temp]["label"]);
									counter++;
									network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter-1),source:"1",root_colour:""});
									edgecounter++;
								}
								if(repeat_flag==1)
								{
									rootwise[current_root]["sub_ids"].push(network_json["data"]["nodes"][temp]["id"]);
									rootwise[current_root]["sub_labels"].push(network_json["data"]["nodes"][temp]["label"]);
								}	
							}
						}
					}
				}
				
				//Coloring disease nodes
				for(var temp in network_json["data"]["nodes"])
				{
					for(var temp2 in rootwise)
					{
						for(var temp3 in rootwise[temp2]["sub_ids"])
						{
							if(network_json["data"]["nodes"][temp]["id"]==rootwise[temp2]["sub_ids"][temp3])
							{		
								network_json["data"]["nodes"][temp]["root_colour"]=rootwise[temp2]["root_colour"];
							}		
						}
					}
				}
				//Adding numbers to parent categories
					for(var temp in network_json["data"]["nodes"])
					{
						if(network_json["data"]["nodes"][temp]["type"]=="category")
						{
							for(var temp2 in rootwise)
							{
								if(rootwise[temp2]["root"]==network_json["data"]["nodes"][temp]["label"])
								{
									network_json["data"]["nodes"][temp]["label"]+="("+rootwise[temp2]["sub_ids"].length+")";
								}
							}
						}
					}
				//Rearranging network - Changing all edges of SNPs from diseases to root node.
				var edge_count=0;
				for(var temp in rootwise)
				{
					for(var temp2 in network_json["data"]["edges"])
					{
						for(var temp3 in rootwise[temp]["sub_ids"])
						{
							if(network_json["data"]["edges"][temp2]["target"]==rootwise[temp]["sub_ids"][temp3])
							{
								edge_count=0;	
								for(var temp4 in network_json["data"]["edges"])
								{
									if(network_json["data"]["edges"][temp4]["target"]==network_json["data"]["edges"][temp2]["source"]&&network_json["data"]["edges"][temp4]["source"]=="1")
									{
										network_json["data"]["edges"][temp4]["source"]=rootwise[temp]["parent_id"];
										for(var temp_colour in network_json["data"]["nodes"])
										{
											if(network_json["data"]["nodes"][temp_colour]["id"]==network_json["data"]["edges"][temp4]["target"])
											{
												network_json["data"]["nodes"][temp_colour]["root_colour"]=rootwise[temp]["root_colour"];
											}
										}
									}
									if(network_json["data"]["edges"][temp4]["target"]==network_json["data"]["edges"][temp2]["source"]&&network_json["data"]["edges"][temp4]["source"]!="1"&&network_json["data"]["edges"][temp4]["source"]!=rootwise[temp]["parent_id"])
									{
										for(var temp_repeat in network_json["data"]["edges"])
										{
											var flag_repeat_edge=0;
											if(network_json["data"]["edges"][temp_repeat]["source"]==rootwise[temp]["parent_id"]&&network_json["data"]["edges"][temp_repeat]["target"]==network_json["data"]["edges"][temp4]["target"])
											{
												flag_repeat_edge=1;
											}
										}
										if(flag_repeat_edge==0)
										{
											network_json["data"]["edges"].push({id:String(edgecounter),source:rootwise[temp]["parent_id"],target:network_json["data"]["edges"][temp4]["target"],root_colour:""});	
											edgecounter++;			
										}										
													
									}
								}							
							}	
						}
						
					}
				}
				//Connecting disease nodes with no SNP s involved in the gene.
				var has_root=0;
				var bugged_edge=0;
				for(var temp in network_json["data"]["nodes"])
				{
					if(network_json["data"]["nodes"][temp]["type"]=="disease")
					{
						has_root=0;
						for(var temp4 in network_json["data"]["edges"])
						{
							if(network_json["data"]["edges"][temp4]["target"]==network_json["data"]["nodes"][temp]["id"]&&network_json["data"]["edges"][temp4]["source"]!="1")
							{
								has_root=1;
							}
							if(network_json["data"]["edges"][temp4]["target"]==network_json["data"]["nodes"][temp]["id"]&&network_json["data"]["edges"][temp4]["source"]=="1")
							{
								bugged_edge=temp4;
							}
						}
						if(has_root==0)
						{
							for(var temp2 in rootwise)
							{	
								for(var temp3 in rootwise[temp2]["sub_ids"])
								{
									if(rootwise[temp2]["sub_ids"][temp3]==network_json["data"]["nodes"][temp]["id"])
									{
										network_json["data"]["edges"][bugged_edge]["source"]=rootwise[temp2]["parent_id"];		
									}
								}
							}	
						}
					}
				}
				//Coloring Edges
				for(var temp in network_json["data"]["edges"])
				{
					for(var temp2 in network_json["data"]["nodes"])
					{
						if(network_json["data"]["edges"][temp]["source"]==network_json["data"]["nodes"][temp2]["id"]&&network_json["data"]["edges"][temp]["source"]!="1"&&network_json["data"]["nodes"][temp2]["type"]=="category")
						{
							network_json["data"]["edges"][temp]["root_colour"]=network_json["data"]["nodes"][temp2]["root_colour"];
						}	
						else if(network_json["data"]["edges"][temp]["target"]==network_json["data"]["nodes"][temp2]["id"])
						{
							network_json["data"]["edges"][temp]["root_colour"]=network_json["data"]["nodes"][temp2]["root_colour"];
						}
					}
				}
				//Filtering network for Step 1 Gene->Root terms network.
				two_step=[];
				for(var temp in network_json["data"]["nodes"])
				{
					if(network_json["data"]["nodes"][temp]["type"]=="q"||network_json["data"]["nodes"][temp]["type"]=="category")
					{
						for(var temp2 in to_display)
						{
							if(to_display[temp2]==network_json["data"]["nodes"][temp]["id"])
							{
								two_step.push(to_display[temp2]);
							}
						}
					}
				}
				//Generating filter options
				var category_html="<ul id='category_filter' class='filter_list'>";
				var disease_html="<ul id='disease_filter' class='filter_list'>";
				var snp_html="<ul id='snp_filter' class='filter_list'>";
				var categoryid_lib=[];
				var diseaseid_lib=[];
				var snpid_lib=[];
				for(var temp in network_json["data"]["nodes"])
				{
					if(network_json["data"]["nodes"][temp]["type"]=="category")
					{
						category_html+="<li class='filter_option' id='category_option"+network_json["data"]["nodes"][temp]["id"]+"'>"+'<input type="checkbox" id="check_'+network_json["data"]["nodes"][temp]["id"]+'" />'+network_json["data"]["nodes"][temp]["label"].replace(/(\d+)/g,"").replace("()","")+"</li>";
						categoryid_lib.push({"id":network_json["data"]["nodes"][temp]["id"],"label":network_json["data"]["nodes"][temp]["label"]});
					}
					else if(network_json["data"]["nodes"][temp]["type"]=="SNP")
					{
						snp_html+="<li class='filter_option' id='snp_option"+network_json["data"]["nodes"][temp]["id"]+"'>"+'<input type="checkbox" id="check_'+network_json["data"]["nodes"][temp]["id"]+'" />'+network_json["data"]["nodes"][temp]["label"]+"</li>";
						snpid_lib.push({"id":network_json["data"]["nodes"][temp]["id"],"label":network_json["data"]["nodes"][temp]["label"]});
					}
					else if(network_json["data"]["nodes"][temp]["type"]=="disease")
					{
						disease_html+="<li class='filter_option' id='disease_option"+network_json["data"]["nodes"][temp]["id"]+"'>"+'<input type="checkbox" id="check_'+network_json["data"]["nodes"][temp]["id"]+'" />'+network_json["data"]["nodes"][temp]["label"]+"</li>";
						diseaseid_lib.push({"id":network_json["data"]["nodes"][temp]["id"],"label":network_json["data"]["nodes"][temp]["label"]});
					}
					$("#filterview").html(category_html+"</ul>"+disease_html+"</ul>"+snp_html+"</ul>"+"<p id='deselect_all'>Deselect All</p><br /><input type='checkbox' id='neighbours_select' />Show First Neighbours");
				}
			
    				neighbour_select=0;
			
				var click_filter=[];
				vis=vis;
				/*
				 * Drawing the network
				 */
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });
    			vis.ready(function(){
    				/*
    				 * Functions to be initialized once the network is generated
    				 */
    				
    				vis.filter("nodes",two_step);//Showing the filtered portion of the network for greater utility
    				vis.addListener("click","nodes",function(evt){
    					var node=evt.target;
    					var next_step=[];
    					var category_label=[];
    					var temp_store=[];
    					if(node.data.type=="category")
    					{
    						for(var temp in rootwise)
    						{
    							if(rootwise[temp]["root"]==node.data.label.replace(/(\d+)/g,"").replace("()",""))
    							{
    								category_label=rootwise[temp]["sub_ids"];	
    							}	
    						}	
    						for(var temp in network_json["data"]["edges"])
    						{
    							if(network_json["data"]["edges"][temp]["source"]==node.data.id)
    							{
    								temp_store.push(network_json["data"]["edges"][temp]["target"]);
    								for(var temp2 in network_json["data"]["edges"])
    								{
    									if(network_json["data"]["edges"][temp2]["source"]==network_json["data"]["edges"][temp]["target"])
    									{
    										for(var temp3 in category_label)
    										{
    											if(category_label[temp3]==network_json["data"]["edges"][temp2]["target"])
    											{
    												
    												var flag=0;
    												for(var temp4 in to_display)
    												{
    													if(to_display[temp4]==network_json["data"]["edges"][temp2]["target"])
    													{
    														flag=1;
    													}
    												}
    												if(flag==1)
    												{
    													temp_store.push(network_json["data"]["edges"][temp2]["target"]);	
    												}
    													
    											}
    										}
    									}	
    								}
    							}
    						}
    							for(var temp in temp_store)
    							{
    								two_step.push(temp_store[temp]);
    								$("#check_"+temp_store[temp]).prop("checked",true);
    							}
    							vis.filter("nodes",two_step);
    						vis.zoomToFit();	
    					}
    				});
    				/*
    				 * Function to show tooltip on hover of nodes
    				 */
    				function tooltip_show(rootNode)
    				{
    					global_hover={id:rootNode.data.id,label:rootNode.data.label,category:rootNode.data.type};
    					$("#hover_tooltip").css({'left':rootNode.x+60,'top':rootNode.y+141});
    					$("#hover_tooltip").css({'display':'block'});
					}
					/*
					 * function to show glow around the immediate neighbors of a node
					 */
    				function hover_glow(rootNode)
    				{
    					hover_select=0;
    					var fNeighbors = vis.firstNeighbors([rootNode],true);
            			var neighborNodes = fNeighbors.neighbors;
						vis.select(neighborNodes);
    					neighborNodes = fNeighbors.neighbors;
    					vis.select(["1"]).select(neighborNodes);
    					var neighbor_chain;
    						for(var temp in neighborNodes)
    						{
    							neighbor_chain=vis.firstNeighbors([neighborNodes[temp]["data"]["id"]],true);
    							vis.select(neighbor_chain.neighbors);
    							vis.select(neighbor_chain.edges);
    						}
    						vis.deselect("nodes",[rootNode.data.id]);
    				}
    				var hover_select=0;
    				
    				vis.addListener("mouseover","nodes",function(evt){
    					var rootNode = evt.target;
    					hover_glow(rootNode);
    					tooltip_show(rootNode);
    				});
    				vis.addListener("mouseout","nodes",function(evt){
                 		vis.deselect("nodes");
                 		vis.deselect("edges");
                 		
                 	});
    				vis.addListener("dblclick","nodes",function(evt){
    					var target_disease="";
    					var node=evt.target;
    					var temp_store=[];
    					if(node.data.type=="SNPcount")
    					{
    							for(var temp in two_step)
    								{
    									if(two_step[temp]==node.data.id)
    									{
    										two_step.splice(temp,1);
    									}
    								}	
    							
    							
    							
    						for(var temp in network_json["data"]["edges"])
    						{
    							if(network_json["data"]["edges"][temp]["source"]==node.data.id)
    							{
    								for(var temp2 in snp_lib)
    								{
    									if(snp_lib[temp2]["parent_disease"]==network_json["data"]["edges"][temp]["target"])
    									{
    										for(var temp3 in snp_lib[temp2]["snp_sub"])
    										{
    											temp_store.push(snp_lib[temp2]["snp_sub"][temp3]);	
    										}
    									}
    								}
    							}
    						}				
    					}
    					
    						for(var temp in temp_store)
    						{
    							two_step.push(temp_store[temp]);
    							$("#check_"+temp_store[temp]).prop("checked",true);
    						}
    						vis.filter("nodes",two_step);
    					
    					vis.zoomToFit();
    				});
    				vis.zoomToFit();
    					});	
			});
			return true;
}

/*
 * Function to generate tabulat data using Slick Grid
 * returns true if table generated successfully
 */
function table_gene(data)
	{
		var grid;
  var columns = [
    {id:"rowno",name:"No",field:"rowno"},
    {id: "gene", name: "SNP", field: "gene", width: 500},
    {id: "snp", name: "Disease", field: "snp", width: 500},
  ];

  var options = {
    editable: true,
  enableAddRow: true,
  enableCellNavigation: true,
  asyncEditorLoading: true,
  forceFitColumns: false,
  topPanelHeight: 25
  };

    var data_for_grid = [];
    var counter=0;
    for (var temp in data["ask"]["results"]["items"]) 
    {
    	if(data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"] instanceof Array)
    	{
    		var SNP_data="";
for(var temp2 in data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"])
     {
     	SNP_data+=data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"][temp2]+'\n';
     }    		
    	}
    	else
    	{
    		SNP_data=data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"];
    	}
     
      data_for_grid[counter] = {rowno:(counter+1),gene: data["ask"]["results"]["items"][temp]["title"]["mTextform"],snp:SNP_data};
      counter++;
    }
    grid = new Slick.Grid("#tabulardata", data_for_grid, columns, options);
    return true;
	}

var neighbour_select=0;//Variable showing if first neighbours are to be shown on choosing a filter option
$(document).ready(function(){
	//Choosing first neighbours
	$("#neighbours_select").live('change',function(){
		if($(this).is(':checked')==true)
		{
			neighbour_select=1;
		}
		else
		{
			neighbour_select=0;
		}
	});
	//Deselect all option
	$("#deselect_all").live('click',function(){
	$(".filter_option input[type='checkbox']").each(function(){
		$(this).prop("checked",false);
		two_step=["1"];
		vis.filter("nodes",two_step);
		vis.zoomToFit();
	});
	});
	
	//Filtering options
	$(".filter_option input[type='checkbox']").live('change',function(){
		if($(this).is(':checked')==true)
		{
			if(neighbour_select==1)
			{
				var fNeighbors = vis.firstNeighbors([this.id.replace("check_","")],false);
				for(var temp in fNeighbors.neighbors)
				{
					two_step.push(fNeighbors.neighbors[temp]["data"]["id"]);
					$('#check_'+fNeighbors.neighbors[temp]["data"]["id"]).prop("checked",true);
				}
			}
			two_step.push(this.id.replace("check_",""));
		}
		else if($(this).is(':checked')==false)
		{
			for(var temp in two_step)
			{
				if(two_step[temp]==this.id.replace("check_",""))
				{
					two_step.splice(temp,1);
				}
			}
		}
		vis.filter("nodes",two_step);
		vis.zoomToFit();
	});
	$(".auto_option").live('mouseover',function(){
		highlighted_option=this.id;
		$(this).css({'padding':'4px','border':'1px solid #333','color':'#333'});
	});
	
	$(".auto_option").live('mouseleave',function(){
		highlighted_option="auto_option0";
		$(this).css({'padding':'5px','border':'0px','color':'#000'});
	});
//Autocomplete and keyboard functions
$("#omni_query").keyup(function(event) {
	if(event.which==13 )//Enter key
	{
		get_data($("#"+highlighted_option+" .option_symbol").html());
	}
	else if(event.which==38)//Down key
	{
		event.preventDefault();
		highlighted_option=highlighted_option.replace("auto_option","");
		var option=parseInt(highlighted_option);
		option--;
		if(option<0)
		{
			option=0;
		}
		highlighted_option="auto_option"+String(option);
		highlight(highlighted_option);
	}
	else if(event.which==40)//Up key
	{
		event.preventDefault();
		highlighted_option=highlighted_option.replace("auto_option","");
		var option=parseInt(highlighted_option);
		option++;
		if(!$("#auto_option"+option))
		{
			option--;
		}
		highlighted_option="auto_option"+String(option);
		highlight(highlighted_option);
	}
	else if(event.which==27)//Escape Key
	{
		event.preventDefault();
		$("#autocomplete_options").html("");
		$("#autocomplete_options").css({'display':'none'});
		highlighted_option="auto_option-1";
	}
	else
	{
		highlighted_option="auto_option-1";
		var query_text=$("#omni_query").val();
		if(query_text=="")
		{
			$("#autocomplete_options").css({'display':'none'});
			highlighted_option="auto_option-1";
		}
		else
		{
			$("#loading").css({'display':'block'});
			$.getJSON("http://mygene.info/query?q=(symbol:"+query_text+" OR symbol:"+query_text+"* OR name:"+query_text+"* OR summary:"+query_text+"*) AND species:human&limit=20&callback=gene_padding", function(data){
				$("#loading").css({'display':'none'});
				$("#autocomplete_options").html("");
				for(var temp in data["rows"])
				{
					$("#autocomplete_options").append("<p class='auto_option' id='auto_option"+temp+"'><span class='option_symbol'>"+data["rows"][temp]["symbol"]+"</span> : "+data["rows"][temp]["name"]+"</p>");
				}
				$("#autocomplete_options").css({'display':'block'});
			});	
		}
		
	}
});
/*
 * On clicking auto complete options
 */
$(".auto_option").live('click',function(){
	var term=$("#"+this.id+" .option_symbol").html();
	term=String(term);
	get_data(term);
});

/*
 * On clicking omni_submit
 */

$("#omni_submit").click(function(){
	if($("#omni_query").val()=="")
	{
		alert("Enter a Gene.");
	}
	else
	{
		get_data($("#omni_query").val());
	}	
});

/*
 * Closing the tooltip
 */
$("#close").click(function(){
	$("#hover_tooltip").fadeOut();
});	

/*
 * On click tooltip, Show Data. Generating Data to be shown from library variables rootwise and snp_lib
 */
$("#show_data").click(function(){
	$("#hover_data").html('<img src="close.png" id="close_data" />');
	$("#hover_tooltip").fadeOut();	
	$("#hover_data").css({'left':$("#hover_tooltip").position().left,'top':$("#hover_tooltip").position().top});
	var html="";
	if(global_hover["category"]=="disease")
	{
		var html_snp="<br />"+global_hover["label"]+" is related to the following SNPs:<br />";
		var snp_counter=0;
		var html_category=global_hover["label"]+" is a root of ";
		for(var temp in network_json["data"]["edges"])
		{
			if(network_json["data"]["edges"][temp]["target"]==global_hover["id"])
			{
				for(var temp2 in network_json["data"]["nodes"])
				{
					if(network_json["data"]["nodes"][temp2]["id"]==network_json["data"]["edges"][temp]["source"]&&network_json["data"]["nodes"][temp2]["type"]=="SNP")
					{
						snp_counter++;
						html_snp+="<a href='http://genewikiplus.org/index.php?title="+network_json["data"]["nodes"][temp2]["label"]+"' target='_blank'>"+network_json["data"]["nodes"][temp2]["label"]+"</a> ";
					}
				}
			}
		}
		for(var temp in rootwise)
		{
			for(var temp2 in rootwise[temp]["sub_ids"])
			{
				if(rootwise[temp]["sub_ids"][temp2]==global_hover["id"])
				{
					html_category+="<a href='http://genewikiplus.org/index.php?title="+network_json["data"]["nodes"][temp2]["label"]+"' target='_blank'>"+rootwise[temp]["root"]+"<a/>";
				}
			}
		}
		if(snp_counter>=1)
		{
			html_snp="<br /><br />The number of related SNP s is "+snp_counter+".<br />"+html_snp;
		html=html_category+html_snp;	
		}
		else if(snp_counter<1)
		{
			html=html_category;
		}
			
	}
	else if(global_hover["category"]=="SNP")
	{
		html+="<a href='http://genewikiplus.org/index.php?title="+global_hover["label"]+"' target='_blank'>"+global_hover["label"]+"</a> is related to the following diseases:<br />"
		for(var temp in snp_lib)
		{
			for(var temp2 in snp_lib[temp]["snp_sub"])
			{
				if(snp_lib[temp]["snp_sub"][temp2]==global_hover["id"])
				{
					html+="<a href='http://genewikiplus.org/index.php?title="+snp_lib[temp]["parent_disease_label"]+"' target='_blank'>"+snp_lib[temp]["parent_disease_label"]+"</a> --Root--> "
					for(var temp_rootwise in rootwise)
					{
						for(var temp_rootwise2 in rootwise[temp_rootwise]["sub_ids"])
						{
							if(rootwise[temp_rootwise]["sub_ids"][temp_rootwise2]==snp_lib[temp]["parent_disease"])
							{
								html+="<a href='http://genewikiplus.org/index.php?title="+rootwise[temp_rootwise]["root"]+"' target='_blank'>"+rootwise[temp_rootwise]["root"]+"</a><br />";
							}
						}
					}
				}
			}
		}
	}
	else if(global_hover["category"]=="SNPcount")
	{
		html="This node contains "+global_hover["label"].replace("SNP(","").replace(")","")+" nodes as shown below:<br />";
		var flag=0;
		for(var temp in network_json["data"]["edges"])
    	{
    		if(network_json["data"]["edges"][temp]["source"]==global_hover["id"])
    		{
    			for(var temp2 in snp_lib)
    			{
    				if(snp_lib[temp2]["parent_disease"]==network_json["data"]["edges"][temp]["target"]&&flag==0)
    				{
    					for(var temp3 in snp_lib[temp2]["snp_sub_label"])
    					{
    						html+="<a href='http://genewikiplus.org/index.php?title="+snp_lib[temp2]["snp_sub_label"][temp3]+"' target='_blank'>"+snp_lib[temp2]["snp_sub_label"][temp3]+"</a> ";
    					}
    				}
    			}
    		}
    	}
    	html+="<br /><br />Double click this node to show specific SNPs.";
	}
	else if(global_hover["category"]=="category")
	{
		html="<a href='http://genewikiplus.org/index.php?title="+global_hover["label"]+"' target='_blank'>"+global_hover["label"]+"</a> contains the following diseases in this network:<br /> ";
		for(var temp in rootwise)
		{
			if(rootwise[temp]["parent_id"]==global_hover["id"])
			{
				for(var temp2 in rootwise[temp]["sub_labels"])
				{
					html+="<a href='http://genewikiplus.org/index.php?title="+rootwise[temp]["sub_labels"][temp2]+"' target='_blank'>"+rootwise[temp]["sub_labels"][temp2]+"</a><br />";
				}
			}
		}
	}
	else if(global_hover["category"]=="q")
	{
		html+="Check out <a href='http://genewikiplus.org/index.php?title="+global_hover["label"]+"' target='_blank'>"+global_hover["label"]+"</a> on <a href='http://genewikiplus.org/' target='_blank'>Gene Wiki Plus</a>";
	}
	$("#hover_data").append("<p>"+html+"</p>");
	$("#hover_data").css({'display':'block'});
});

/*
 * Closing hover data bubble
 */
$("#close_data").live('click',function(){
	$("#hover_data").css({'display':'none'});
});

/*
 * Options to exprot netowrk as png,pdf,svg and txt
 */
$("#export_options ul li").click(function(){
	var id=this.id;
	if(id=="pdf")
		{
			vis.exportNetwork('pdf', 'export.php?type=pdf');
		}
		else if(id=="png")
		{
			vis.exportNetwork('png', 'export.php?type=png');
		}
		else if(id=="txt")
		{
			vis.exportNetwork('txt', 'export.php?type=txt');
		}
		else if(id=="svg")
		{
			vis.exportNetwork('svg', 'export.php?type=svg');
		}
});

/*
 * Menu options - Netowork, Tabular and Filter options view
 */
$("#network_view").click(function(){
	$("#view_choose_list li").css({'background':'#ECECEC','color':'#000'});
	$(this).css({'background':'#000','color':'#FFF'});
	$("#tabulardata").css({'display':'none'});
	$("#networkview").css({'display':'block'});
});

$("#tabular_view").click(function(){
	$("#view_choose_list li").css({'background':'#ECECEC','color':'#000'});
	$(this).css({'background':'#000','color':'#FFF'});
	$("#networkview").css({'display':'none'});
	$("#tabulardata").css({'display':'block'});
});

var flag_filter=0;
$("#filter_view").click(function(){
	if(flag_filter==0)
	{
	
		$("#filterview").css({'display':'block'});
	$(this).html("Close");
	for(var temp in two_step)
	{
		$("#check_"+two_step[temp]).prop("checked",true);
		console.log("#check_"+two_step[temp]);
	}
	flag_filter=1;	
	}
	else
	{
		$("#filterview").css({'display':'none'});
	$(this).html("Filter Network");
	flag_filter=0;
	}
	
});

});
