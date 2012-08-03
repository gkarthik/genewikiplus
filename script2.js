/**
 * @author gkarthik
 */


var global_vis;
var global_hover="";
var network_json=[];
var rootwise=[];
var snp_lib=[];
var data_CFH={"ask":{"query":{"q":"[[in_gene::P53]]","po":["is associated with disease"]},"results":{"count":32,"items":[{"properties":{"is_associated_with_disease":["Hepatocellular carcinoma","Papillary thyroid carcinoma","Choroid plexus papilloma","Gallbladder cancer","Telangiectasis","Endometrial cancer","Colorectal cancer","Prostate cancer","Hereditary breast ovarian cancer","Neutropenia","Primary open anle glaucoma","Non-small cell lung carcinoma","Breast cancer","Ovarian cancer","Leukemia","Choroid plexus carcinoma","Hydrocephalus"],"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs1042522","mUrlform":"Rs1042522","mDbkeyform":"Rs1042522","mUserCaseDBKey":"Rs1042522","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs1042522"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs11540652","mUrlform":"Rs11540652","mDbkeyform":"Rs11540652","mUserCaseDBKey":"Rs11540652","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs11540652"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912651","mUrlform":"Rs121912651","mDbkeyform":"Rs121912651","mUserCaseDBKey":"Rs121912651","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912651"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912652","mUrlform":"Rs121912652","mDbkeyform":"Rs121912652","mUserCaseDBKey":"Rs121912652","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912652"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912653","mUrlform":"Rs121912653","mDbkeyform":"Rs121912653","mUserCaseDBKey":"Rs121912653","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912653"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912656","mUrlform":"Rs121912656","mDbkeyform":"Rs121912656","mUserCaseDBKey":"Rs121912656","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912656"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912657","mUrlform":"Rs121912657","mDbkeyform":"Rs121912657","mUserCaseDBKey":"Rs121912657","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912657"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912662","mUrlform":"Rs121912662","mDbkeyform":"Rs121912662","mUserCaseDBKey":"Rs121912662","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912662"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912663","mUrlform":"Rs121912663","mDbkeyform":"Rs121912663","mUserCaseDBKey":"Rs121912663","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912663"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs121912666","mUrlform":"Rs121912666","mDbkeyform":"Rs121912666","mUserCaseDBKey":"Rs121912666","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs121912666"},{"properties":{"is_associated_with_disease":"Cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs12947788","mUrlform":"Rs12947788","mDbkeyform":"Rs12947788","mUserCaseDBKey":"Rs12947788","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs12947788"},{"properties":{"is_associated_with_disease":["Ovarian cancer","Breast cancer"],"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs12951053","mUrlform":"Rs12951053","mDbkeyform":"Rs12951053","mUserCaseDBKey":"Rs12951053","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs12951053"},{"properties":{"is_associated_with_disease":"Endometrial cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs1625895","mUrlform":"Rs1625895","mDbkeyform":"Rs1625895","mUserCaseDBKey":"Rs1625895","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs1625895"},{"properties":{"is_associated_with_disease":"Cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs1642785","mUrlform":"Rs1642785","mDbkeyform":"Rs1642785","mUserCaseDBKey":"Rs1642785","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs1642785"},{"properties":{"is_associated_with_disease":"Endometrial cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs17878362","mUrlform":"Rs17878362","mDbkeyform":"Rs17878362","mUserCaseDBKey":"Rs17878362","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs17878362"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs17884306","mUrlform":"Rs17884306","mDbkeyform":"Rs17884306","mUserCaseDBKey":"Rs17884306","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs17884306"},{"properties":{"is_associated_with_disease":"Breast cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs17887200","mUrlform":"Rs17887200","mDbkeyform":"Rs17887200","mUserCaseDBKey":"Rs17887200","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs17887200"},{"properties":{"is_associated_with_disease":"Ovarian cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs2078486","mUrlform":"Rs2078486","mDbkeyform":"Rs2078486","mUserCaseDBKey":"Rs2078486","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs2078486"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934271","mUrlform":"Rs28934271","mDbkeyform":"Rs28934271","mUserCaseDBKey":"Rs28934271","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934271"},{"properties":{"is_associated_with_disease":"Hepatocellular carcinoma","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934571","mUrlform":"Rs28934571","mDbkeyform":"Rs28934571","mUserCaseDBKey":"Rs28934571","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934571"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934572","mUrlform":"Rs28934572","mDbkeyform":"Rs28934572","mUserCaseDBKey":"Rs28934572","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934572"},{"properties":{"is_associated_with_disease":"Hepatoblastoma","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934573","mUrlform":"Rs28934573","mDbkeyform":"Rs28934573","mUserCaseDBKey":"Rs28934573","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934573"},{"properties":{"is_associated_with_disease":"Osteosarcoma","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934574","mUrlform":"Rs28934574","mDbkeyform":"Rs28934574","mUserCaseDBKey":"Rs28934574","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934574"},{"properties":{"is_associated_with_disease":"Osteosarcoma","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934575","mUrlform":"Rs28934575","mDbkeyform":"Rs28934575","mUserCaseDBKey":"Rs28934575","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934575"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934576","mUrlform":"Rs28934576","mDbkeyform":"Rs28934576","mUserCaseDBKey":"Rs28934576","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934576"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934577","mUrlform":"Rs28934577","mDbkeyform":"Rs28934577","mUserCaseDBKey":"Rs28934577","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934577"},{"properties":{"is_associated_with_disease":"Cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934578","mUrlform":"Rs28934578","mDbkeyform":"Rs28934578","mUserCaseDBKey":"Rs28934578","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934578"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934873","mUrlform":"Rs28934873","mDbkeyform":"Rs28934873","mUserCaseDBKey":"Rs28934873","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934873"},{"properties":{"is_associated_with_disease":"Breast cancer","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934874","mUrlform":"Rs28934874","mDbkeyform":"Rs28934874","mUserCaseDBKey":"Rs28934874","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934874"},{"properties":{"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs28934875","mUrlform":"Rs28934875","mDbkeyform":"Rs28934875","mUserCaseDBKey":"Rs28934875","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs28934875"},{"properties":{"is_associated_with_disease":"Primary open anle glaucoma","type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs59758982","mUrlform":"Rs59758982","mDbkeyform":"Rs59758982","mUserCaseDBKey":"Rs59758982","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs59758982"},{"properties":{"is_associated_with_disease":["Prostate cancer","Breast cancer"],"type":{"mTextform":"Is a snp","mUrlform":"Is_a_snp","mDbkeyform":"Is_a_snp","mUserCaseDBKey":"Is_a_snp","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Is a snp","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"Rs78378222","mUrlform":"Rs78378222","mDbkeyform":"Rs78378222","mUserCaseDBKey":"Rs78378222","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=Rs78378222"}]},"result":"Success"}};
var data_CFH_disease={"ask":{"query":{"q":"[[P53]]","po":["is_associated_with_disease"]},"results":{"count":1,"items":[{"properties":{"is_associated_with_disease":["Telangiectasis","Lung cancer","Werner syndrome","Colorectal cancer","Retinoblastoma","Astrocytoma","Ovarian carcinoma","Ataxia telangiectasia","Melanoma","Hereditary breast ovarian cancer","Li-Fraumeni syndrome","Squamous cell carcinoma","Cockayne syndrome","Cervical cancer","Huntington's disease","Muscular atrophy","Endometrial cancer","Syndrome","Spinal muscular atrophy","Pancreatic cancer","Spindle cell hemangioma","Breast cancer","Renal cell carcinoma","Bloom syndrome","Leukemia"],"type":{"mTextform":"Pages with incomplete PMID references","mUrlform":"Pages_with_incomplete_PMID_references","mDbkeyform":"Pages_with_incomplete_PMID_references","mUserCaseDBKey":"Pages_with_incomplete_PMID_references","mNamespace":14,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":"Category:Pages with incomplete PMID references","mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null}},"title":{"mTextform":"P53","mUrlform":"P53","mDbkeyform":"P53","mUserCaseDBKey":"P53","mNamespace":0,"mInterwiki":"","mFragment":"","mArticleID":-1,"mLatestID":false,"mRestrictions":[],"mOldRestrictions":false,"mCascadeRestriction":null,"mCascadingRestrictions":null,"mRestrictionsExpiry":[],"mHasCascadingRestrictions":null,"mCascadeSources":null,"mRestrictionsLoaded":false,"mPrefixedText":null,"mTitleProtection":null,"mDefaultNamespace":0,"mWatched":null,"mLength":-1,"mRedirect":null,"mNotificationTimestamp":[],"mBacklinkCache":null},"uri":"http:\/\/genewikiplus.org\/index.php?title=P53"}]},"result":"Success"}};
function get_data()
{
	$("#networkview").html("Loading network on gene, "+$("#omni_query").val());
	$.getJSON("http://genewikiplus.org/api.php?action=ask&q=[[in_gene::"+$("#omni_query").val()+"]]&po=is+associated+with+disease&format=json&callback=?", function(data) {
	//	var data=data_CFH;
		$("#view_choose").fadeIn();
		$("#export_options").fadeIn();
		generate_network(data);
		table_gene(data);
	});		
}

function generate_network(data)
{
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
                        backgroundColor: "#ABCFD6"
                    },
                    nodes: {
                    	color:{ customMapper: { functionName: "customColor" }},
                        shape: { customMapper: { functionName: "customShape" }},
                        borderWidth: 3,
                        borderColor: "#ffffff",
                        labelFontColor:{ customMapper: { functionName: "customLabelColor" }},
                        opacity : 1, 
                        labelFontSize : { customMapper: { functionName: "customSize" } },
                        size:"auto",
                        selectionBorderColor : "#000",
                        selectionBorderWidth :10,
                        hoverBorderColor :"#000",
                        hoverBorderWidth :5,
                      },
                      edges:{
                      	color:{ customMapper: { functionName: "customEdgeColor" }},
                      	width:10,
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
                
                if(data["ask"]["results"]==undefined)
                {
                	$("#networkview").html("The Gene supplied doesn't have any associated disease in our database.")
                }
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
                
                     var layout = {
  								  name:    "ForceDirected",
  								  options:{
  								  	mass: 200,
  								  	gravitation: -10,
  								  	maxTime: 100000,
  								  	minDistance: 100,
  								  	maxDistance:300,
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
                var vis = new org.cytoscapeweb.Visualization(div_id, options); 
                  vis["customSize"] = function (data) {
    								   		var size = 35+Math.round(1.5*data["weight"]);
											return size;	
									   };
				  vis["customLabelColor"] = function (data) {
	    								   		return ColorLuminance(data["root_colour"].replace("#",""));
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
                				
                			}	
                			else
                			{                			
                			if(network_json["data"]["nodes"][delete_temp]["label"]==network_json["data"]["nodes"][temp_node]["label"])
                			{
                			counter_for_deletion++;	                			
                			if(counter_for_deletion>1)
                			{
                				//delete [delete_temp]["label"]="To be deleted";
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
                $.getJSON("http://genewikiplus.org/api.php?action=ask&q=[["+$("#omni_query").val()+"]]&po=is_associated_with_disease&format=json&callback=?", function(data) {
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
				//Making nodes of parent categories and making a library, "rootwise" of root categoires. 
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
									var colour='#'+Math.floor(Math.random()*16777215).toString(16);
									network_json["data"]["nodes"].push({id:String(counter),label:disease_ontology["disease_ontology_roots"][temp_do]["do_roots"][0]["do_name"],type:"category",root_colour:colour});
									to_display.push(String(counter));
									rootwise.push({"root":disease_ontology["disease_ontology_roots"][temp_do]["do_roots"][0]["do_name"],"parent_id":String(counter),"sub_ids":[],"sub_labels":[],"root_colour":colour});
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
				console.log(rootwise);
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
						if(network_json["data"]["edges"][temp]["target"]==network_json["data"]["nodes"][temp2]["id"])
						{
							network_json["data"]["edges"][temp]["root_colour"]=network_json["data"]["nodes"][temp2]["root_colour"];
						}
					}
				}
				//Filtering network for Step 1 Gene->Root terms network.
				var two_step=[];
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
				var click_filter=[];
				global_vis=vis;
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });
    			vis.ready(function(){
    				vis.filter("nodes",two_step);
    				vis.addListener("click","nodes",function(evt){
    					var node=evt.target;
    					var next_step=[];
    					if(node.data.type=="category")
    					{
    						var fNeighbors = vis.firstNeighbors([node],false);
            				var neighborNodes = fNeighbors.neighbors;
            				var flag=0;
            				var flag_main=0;
    						for(var temp in neighborNodes)
    						{
    							if(neighborNodes[temp]["data"]["type"]=="SNPcount"||neighborNodes[temp]["data"]["type"]=="SNP")
    							{
    								var fNeighbors2 = vis.firstNeighbors([neighborNodes[temp]["data"]["id"]],false);
            						var neighborNodes2 = fNeighbors2.neighbors;
    								for(var temp2 in neighborNodes2)
    								{
    									flag=0;
    									for(var temp3 in to_display)
    									{
       										if(to_display[temp3]==neighborNodes2[temp2]["data"]["id"])
    										{
    											flag=1;
    											
    										}
    									}
    									
    									if(flag==1)
    									{
    										two_step.push(neighborNodes2[temp2]["data"]["id"]);
    									}
    								}	
    							}
    							flag_main=0;
    							for(var temp3 in to_display)
    							{
       								if(to_display[temp3]==neighborNodes[temp]["data"]["id"])
    								{
    									flag_main=1;
    								}
    							}
    							
    							if(flag_main==1)
    							{
    								two_step.push(neighborNodes[temp]["data"]["id"]);	
    							}
    						}
    						vis.filter("nodes",two_step);	
    					}
    				});
    				
    				function tooltip_show(rootNode)
    				{
    					global_hover={id:rootNode.data.id,label:rootNode.data.label,category:rootNode.data.type};
    					$("#hover_tooltip").css({'left':rootNode.x+60,'top':rootNode.y+141});
    					$("#hover_tooltip").css({'display':'block'});;
					}
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
    											two_step.push(snp_lib[temp2]["snp_sub"][temp3]);	
    										}
    									}
    								}
    							}
    						}				
    					}
    					vis.filter("nodes",two_step);
    				});
    					});	
			});
}

function table_gene(data)
	{
		var grid;
  var columns = [
    {id:"rowno",name:"No",field:"rowno"},
    {id: "gene", name: "SNP", field: "gene", width: 200},
    {id: "snp", name: "Disease", field: "snp", width: 200},
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
	}

function rgb2hsv (r,g,b) {
 var computedH = 0;
 var computedS = 0;
 var computedV = 0;
 var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
 var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
 var b = parseInt( (''+b).replace(/\s/g,''),10 ); 
 if ( r==null || g==null || b==null ||
     isNaN(r) || isNaN(g)|| isNaN(b) ) {
   console.log ('Please enter numeric RGB values!');
   return;
 }
 if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
   console.log ('RGB values must be in the range 0 to 255.');
   return;
 }
 r=r/255; g=g/255; b=b/255;
 var minRGB = Math.min(r,Math.min(g,b));
 var maxRGB = Math.max(r,Math.max(g,b));
 if (minRGB==maxRGB) {
  computedV = minRGB;
  return [0,0,computedV];
 }
 var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
 var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
 computedH = 60*(h - d/(maxRGB - minRGB));
 computedS = (maxRGB - minRGB)/maxRGB;
 computedV = maxRGB;
 return [computedH,computedS,computedV];
}

function hsv2rgb(h,s,v) {
var r, g, b;
var RGB = new Array();
if(s==0){
  RGB['red']=RGB['green']=RGB['blue']=Math.round(v*255);
}else{
  var var_h = h * 6;
  if (var_h==6) var_h = 0;
  var var_i = Math.floor( var_h );
  var var_1 = v*(1-s);
  var var_2 = v*(1-s*(var_h-var_i));
  var var_3 = v*(1-s*(1-(var_h-var_i)));
  if(var_i==0){ 
    var_r = v; 
    var_g = var_3; 
    var_b = var_1;
  }else if(var_i==1){ 
    var_r = var_2;
    var_g = v;
    var_b = var_1;
  }else if(var_i==2){
    var_r = var_1;
    var_g = v;
    var_b = var_3
  }else if(var_i==3){
    var_r = var_1;
    var_g = var_2;
    var_b = v;
  }else if (var_i==4){
    var_r = var_3;
    var_g = var_1;
    var_b = v;
  }else{ 
    var_r = v;
    var_g = var_1;
    var_b = var_2
  }
  RGB['red']=Math.round(var_r * 255);
  RGB['green']=Math.round(var_g * 255);
  RGB['blue']=Math.round(var_b * 255);
  }
return RGB;  
};

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    //alert(result);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {r:0,g:0,b:0};
}
	function ColorLuminance(hexcolor) {
	var hex_rgb=hexToRgb("#"+hexcolor);
	var hsv_color=rgb2hsv(hex_rgb.r,hex_rgb.g,hex_rgb.b);
	hsv_color[0]=(hsv_color[0] + 180) % 360;
	hsv_color[1]=1-hsv_color[1];
	//hsv_color[2]=1-hsv_color[2];
	if(hsv_color[1]<0)
	{
		hsv_color[1]=-1*hsv_color[1];
	}
	if(hsv_color[2]<=0.25)
	{
		hsv_color[2]=0.75;
	}
	else if(hsv_color[2]<=0.5&&hsv_color[2]>0.25)
	{
		hsv_color[2]=1;
	}
	else if(hsv_color[2]<=0.75&&hsv_color[2]>0.50)
	{
		hsv_color[2]=0;
	}
	else if(hsv_color[2]<=1&&hsv_color[2]>0.75)
	{
		hsv_color[2]=0.25;
	}
	
	/*if(hsv_color[2]<=0.5)
	{
		return "white";
	}
	else
	{
		return "black";
	}*/
	
	var rgb_color=hsv2rgb(hsv_color[0],hsv_color[1],hsv_color[2]);
	return rgbToHex(rgb_color['red'],rgb_color['green'],rgb_color['blue']);
}

$(document).ready(function(){
$("#omni_submit").click(function(){
	if($("#omni_query").val()=="")
	{
		alert("Enter a Gene.");
	}
	else
	{
		get_data();
	}	
});

$("#close").click(function(){
	$("#hover_tooltip").fadeOut();
});	

$("#show_data").click(function(){
	$("#hover_data").html('<img src="close.png" id="close_data" />');
	$("#hover_tooltip").fadeOut();	
	$("#hover_data").css({'left':$("#hover_tooltip").position().left,'top':$("#hover_tooltip").position().top});
	var html="";
	//alert(global_hover["category"]);
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

$("#close_data").live('click',function(){
	$("#hover_data").css({'display':'none'});
});

$("#export_options ul li").click(function(){
	var id=this.id;
	if(id=="pdf")
		{
			global_vis.exportNetwork('pdf', 'export.php?type=pdf');
		}
		else if(id=="png")
		{
			global_vis.exportNetwork('png', 'export.php?type=png');
		}
		else if(id=="txt")
		{
			global_vis.exportNetwork('txt', 'export.php?type=txt');
		}
		else if(id=="svg")
		{
			global_vis.exportNetwork('svg', 'export.php?type=svg');
		}
});

$("#network_view").click(function(){
	$("#tabulardata").css({'display':'none'});
	$("#networkview").fadeIn();
});

$("#tabular_view").click(function(){
	$("#networkview").css({'display':'none'});
	$("#tabulardata").fadeIn();
});

});
