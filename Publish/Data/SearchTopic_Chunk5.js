define({"346":{i:0.00329077435857039,u:"../Content/Admin API/Data Objects/NotificationRule.htm",a:"[Admin API Object] A list of NotificationRule objects is returned as the response payload for this Admin API operation: GET Notification Rules The NotificationRule object is required as the request payload for these Admin API operations: POST Updated Notification Rule PUT New Notification Rule The ...",t:"NotificationRule"},"347":{i:0.00106177847599868,u:"../Content/Admin API/Data Objects/NotificationRulesEnable.htm",a:"[Admin API Object] The NotificationRulesEnable object is required as the request payload for this Admin API operation: POST Notification Rule Enable/Disable The NotificationRulesEnable object consists of the attributes below. Each attribute description indicates whether the attribute is mandatory or ...",t:"NotificationRulesEnable"},"348":{i:0.00181302385657245,u:"../Content/Admin API/Data Objects/Pair.htm",a:"[Admin API Object] A list of Pair objects is nested within the  RuleClass  object. The Pair object consists of the following attributes: first (string) Rating tier size, as a number of units. In the first Pair within a list of Pair objects, the \"first\" attribute specifies the N in the rating rule ...",t:"Pair"},"349":{i:0.00177104735809879,u:"../Content/Admin API/Data Objects/PublicUrlAccess.htm",a:"[Admin API Object] The PublicUrlAccess object is returned as the response payload for this Admin API operation: GET Object\u0027s Public URL Permissions The PublicUrlAccess object is required as the request payload for this Admin API operation: POST Object\u0027s Public URL Permissions The PublicUrlAccess ...",t:"PublicUrlAccess"},"350":{i:0.00394977416177884,u:"../Content/Admin API/Data Objects/QosLimit.htm",a:"[Admin API Object] A list of QosLimit objects is nested within the  QosLimitSettings  object. The QosLimit object consists of the following attributes: type (string) One of the following QoS limit types: STORAGE_QUOTA_KBYTES STORAGE_QUOTA_COUNT REQUEST_RATE_LW REQUEST_RATE_LH DATAKBYTES_IN_LW ...",t:"QosLimit"},"351":{i:0.00555167237543278,u:"../Content/Admin API/Data Objects/QosLimitSettings.htm",a:"[Admin API Object] The QosLimitSettings object is returned as the response payload for this Admin API operation: GET QoS Limits The QosLimitSettings object consists of the following attributes: groupId (string) Group ID. This will be either a specific group ID, or \"ALL\", or \"*\". For details of how ...",t:"QosLimitSettings"},"352":{i:0.00506272038614473,u:"../Content/Admin API/Data Objects/RatingPlan.htm",a:"[Admin API Object] The RatingPlan object is returned as the response payload for these Admin API operations: GET Rating Plan GET User\u0027s Rating Plan The RatingPlan object is required as the request payload for these Admin API operations: POST Updated Rating Plan PUT New Rating Plan The RatingPlan ...",t:"RatingPlan"},"353":{i:0.0028134485645188,u:"../Content/Admin API/Data Objects/RegionBill.htm",a:"[Admin API Object] A list of RegionBill objects is nested within the  Bill  object. In a Bill object there will be one RegionBill object for each service region in your HyperStore system. The RegionBill object consists of the following attributes: currency (string) Currency string items (Map\u003cstring, ...",t:"RegionBill"},"354":{i:0.00295773860773102,u:"../Content/Admin API/Data Objects/RuleClass.htm",a:"[Admin API Object] A list of RuleClass objects is nested within the  RatingPlan  object. The RuleClass object consists of the following attributes: ruleclassType (string) Type of rating rule: one of {STORAGE_BYTE, BYTES_IN, BYTES_OUT, HTTP_GET, HTTP_PUT, HTTP_DELETE}. These are the service usage ...",t:"RuleClass"},"355":{i:0.00256157645220067,u:"../Content/Admin API/Data Objects/SecurityInfo.htm",a:"[Admin API Object] The SecurityInfo object is returned as the response payload for these Admin API operations: GET User\u0027s S3 Credential GET User\u0027s S3 Credentials List GET User\u0027s S3 Credentials List (Active) The SecurityInfo object consists of the following attributes: accessKey (string) User’s ...",t:"SecurityInfo"},"356":{i:0.00482484483914581,u:"../Content/Admin API/Data Objects/UsageData.htm",a:"[Admin API Object] The UsageData object is returned as the response payload for this Admin API operation: GET Usage Data The UsageData object consists of the following attributes: averageValue (string) Average value for the granularity interval. This is \"value\" divided by \"count\". count (string) ...",t:"UsageData"},"357":{i:0.00329406175651612,u:"../Content/Admin API/Data Objects/UserInfo.htm",a:"[Admin API Object] iThe UserInfo object is returned as the response payload for these Admin API operations: GET User GET User List The UserInfo object is required as the request payload for this Admin API operation: POST Updated User The UserInfo object is required as the request payload for this ...",t:"UserInfo"},"358":{i:0.00211793769825593,u:"../Content/Admin API/Data Objects/Whitelist.htm",a:"[Admin API Object] The Whitelist object is returned as the response payload for this Admin API operation: GET Whitelist The Whitelist object is required as the request payload for this Admin API operation: POST Updated Whitelist Via Request Object The Whitelist object consists of the attributes ...",t:"Whitelist"},"359":{i:0.000555942749785594,u:"../Content/Admin API/AdminApiBasicAuthentication.htm",a:"You can optionally configure the Admin Service to require HTTP Basic Authentication from clients. HTTP Basic Authentication is not required and by default it is not enabled. To enable HTTP Basic Authentication for the Admin Service: Create a Jetty-obfuscated password. Use the Jetty password tool ...",t:"Using HTTP Basic Authentication for Admin API Access"},"360":{i:0.000555942749785594,u:"../Content/Admin API/RequestResponseHeaders.htm",a:"[Admin API ] Request Headers For POST and PUT requests, the Content-Type header should be set to \"application/json\". Depending on the request type and the result, the response from the Admin API may be in format application/json, text/html, or text/plain. So in your requests do not use an Accept ...",t:"Request and Response Headers"},"361":{i:0.0883310071351728,u:"../Content/Admin API/CommonStatusCodes.htm",a:"[Admin API ] The following HTTP Status Codes are relevant for every Admin API method. Each method may return these codes, in addition to method-specific status codes indicated in the method documentation. The following HTTP Status Code is relevant for all Admin API methods that are forbidden in the ...",t:"Common Response Status Codes"},"362":{i:0.000555942749785594,u:"../Content/Admin API/AdminApiLogging.htm",a:"Admin API transactions are logged in the Admin Service application log, for which the default location is /var/log/cloudian/cloudian-admin.log. API transactions are logged at log level INFO. As with all Admin Service application log entries, the format for API transaction entries is: Date(ISO8601) ...",t:"Admin API Logging"},"363":{i:0.000555942749785594,u:"../Content/S3 API Support/S3ApiSupportOverview.htm",a:"The Cloudian HyperStore system supports the great majority of the Amazon S3 REST API, including advanced features. This documentation provides the details of the HyperStore system’s compliance with the S3 REST API. The organization of this documentation parallels that of the Amazon S3 API Reference. ...",t:"HyperStore Support for the Amazon S3 API"},"364":{i:0.000555942749785594,u:"../Content/S3 API Support/ErrorResponses.htm",a:"[S3 API] From the \"Error Responses\" section of the Amazon S3 API, the HyperStore system supports the error codes listed below. If an error code from the Amazon S3 API specification is not listed below, the HyperStore system does not support it. For error descriptions and for mapping of these errors ...",t:"Error Responses"},"365":{i:0.000555942749785594,u:"../Content/S3 API Support/AuthenticatingRequests.htm",a:"[S3 API] The HyperStore system supports AWS Signature Version 4 for authenticating inbound API requests. The HyperStore implementation of this feature is compliant with Amazon’s specification of the feature. For example, you can express authentication information in the HTTP Authorization header or ...",t:"Authenticating Requests (AWS Signature Version 4)"},"366":{i:0.0186139934174017,u:"../Content/S3 API Support/CommonRequestHeaders.htm",a:"[S3 API] From the \"Common Request Headers\" section of the Amazon S3 REST API, the HyperStore system supports the headers listed below. If a common request header from the Amazon S3 API specification is not listed below, the HyperStore system does not support it. For header descriptions, refer to the ...",t:"Common Request Headers"},"367":{i:0.0186139934174017,u:"../Content/S3 API Support/CommonResponseHeaders.htm",a:"[S3 API] From the \"Common Response Headers\" section of the Amazon S3 REST API, the HyperStore system supports the headers listed below. If a common response header from the Amazon S3 API specification is not listed below, the HyperStore system does not support it. For header descriptions, refer to ...",t:"Common Response Headers"},"368":{i:0.000555942749785594,u:"../Content/S3 API Support/AccessControlList.htm",a:"[S3 API] For the Amazon S3 \"Access Control List (ACL)\" functionality, the HyperStore system supports the items listed below. If a grantee group, permission type, or canned ACL type from the Amazon S3 documentation is not listed below, the HyperStore system does not support it. For ACL usage ...",t:"Access Control List (ACL)"},"369":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnService/GetService.htm",a:"[S3 API Method] For the Amazon S3 \"GET Service\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"GET Service"},"370":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/OperationsOnBucketsOverview.htm",a:"Operations On Buckets From the \"Operations on Buckets\"  portion of the Amazon S3 REST API, the HyperStore system supports the operations listed in this section. If a bucket operation from the Amazon S3 API specification is not listed in this section, the HyperStore system does not support it.",t:"Operations On Buckets"},"371":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/DeleteBucket.htm",a:"[S3 API Method] For the Amazon S3 \"DELETE Bucket\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  . For operation usage information and for descriptions of request and response items, see  DELETE Bucket  in the Amazon S3 REST API specification.",t:"DELETE Bucket"},"372":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/DeleteBucketCors.htm",a:"[S3 API Method] For the Amazon S3 \"DELETE Bucket cors\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  . For operation usage information and for descriptions of request and response items, see  DELETE Bucket cors  in the Amazon S3 REST API ...",t:"DELETE Bucket cors"},"373":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/DeleteBucketLifecycle.htm",a:"[S3 API Method] For the Amazon S3 \"DELETE Bucket lifecycle\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers . For operation usage information and for descriptions of request and response items, see  DELETE Bucket lifecycle  in the Amazon S3 REST ...",t:"DELETE Bucket lifecycle"},"374":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/DeleteBucketPolicy.htm",a:"[S3 API Method] For the Amazon S3 \"DELETE Bucket Policy\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers . For operation usage information and for descriptions of request and response items, see  DELETE Bucket Policy  in the Amazon S3 REST API ...",t:"DELETE Bucket Policy"},"375":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/DeleteBucketReplication.htm",a:"[S3 API Method] For the Amazon S3 \"DELETE Bucket replication\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers . For operation usage information and for descriptions of request and response items, see  DELETE Bucket replication  in the Amazon S3 ...",t:"DELETE Bucket replication"},"376":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/DeleteBucketWebsite.htm",a:"[S3 API Method] For the Amazon S3 \"DELETE Bucket website\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers . For operation usage information and for descriptions of request and response items, see  DELETE Bucket website  in the Amazon S3 REST API ...",t:"DELETE Bucket website"},"377":{i:0.00302628516206191,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketListObjects.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket (List Objects)\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification ...",t:"GET Bucket (List Objects)"},"378":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketAcl.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket  acl\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"GET Bucket  acl"},"379":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketCors.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket cors\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"GET Bucket cors"},"380":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketLifecycle.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket lifecycle\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"GET Bucket lifecycle"},"381":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketPolicy.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket policy\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"GET Bucket policy"},"382":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketLocation.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket location\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"GET Bucket location"},"383":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketLogging.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket logging\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"GET Bucket logging"},"384":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketReplication.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket replication\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification ...",t:"GET Bucket replication"},"385":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketObjectVersions.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket Object versions\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 ...",t:"GET Bucket Object versions"},"386":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketVersioning.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket versioning\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"GET Bucket versioning"},"387":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/GetBucketWebsite.htm",a:"[S3 API Method] For the Amazon S3 \"GET Bucket website\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"GET Bucket website"},"388":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/HeadBucket.htm",a:"[S3 API Method] For the Amazon S3 \"HEAD Bucket\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"HEAD Bucket"},"389":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/ListMultipartUploads.htm",a:"[S3 API Method] For the Amazon S3 \"List Multipart Uploads\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification ...",t:"List Multipart Uploads"},"390":{i:0.00237378126072125,u:"../Content/S3 API Support/OperationsOnBuckets/PutBucket.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Bucket\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"PUT Bucket"},"391":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/PutBucketAcl.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Bucket acl\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"PUT Bucket acl"},"392":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsOnBuckets/PutBucketCors.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Bucket cors\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"PUT Bucket cors"},"393":{i:0.00459457892639305,u:"../Content/S3 API Support/OperationsOnBuckets/PutBucketLifecycle.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Bucket lifecycle\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"PUT Bucket lifecycle"},"394":{i:0.00120465686067934,u:"../Content/S3 API Support/OperationsOnBuckets/PutBucketPolicy.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Bucket policy\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"PUT Bucket policy"},"395":{i:0.00226301737823755,u:"../Content/S3 API Support/OperationsOnBuckets/PutBucketLogging.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Bucket logging\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"PUT Bucket logging"},"396":{i:0.00166356448084296,u:"../Content/S3 API Support/OperationsOnBuckets/PutBucketReplication.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Bucket replication\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification ...",t:"PUT Bucket replication"},"397":{i:0.00197739953583092,u:"../Content/S3 API Support/OperationsOnBuckets/PutBucketVersioning.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Bucket versioning\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"PUT Bucket versioning"},"398":{i:0.000760736607131796,u:"../Content/S3 API Support/OperationsOnBuckets/PutBucketWebsite.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Bucket website\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"PUT Bucket website"},"399":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsObjects/OperationsOnObjectsOverview.htm",a:"Operations On Objects From the \"Operations on Objects\" portion of the Amazon S3 REST API, the HyperStore system supports the operations listed in this section. If an operation is not listed in this section, the HyperStore system does not support it.",t:"Operations On Objects"},"400":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsObjects/DeleteObject.htm",a:"[S3 API Method] For the Amazon S3 \"DELETE Object\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"DELETE Object"},"401":{i:0.000884974134835416,u:"../Content/S3 API Support/OperationsObjects/DeleteMultipleObjects.htm",a:"[S3 API Method] For the Amazon S3 \"Delete Multiple Objects\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification ...",t:"Delete Multiple Objects"},"402":{i:0.00332827926208472,u:"../Content/S3 API Support/OperationsObjects/GetObject.htm",a:"[S3 API Method] For the Amazon S3 \"GET Object\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"GET Object"},"403":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsObjects/GetObjectAcl.htm",a:"[S3 API Method] For the Amazon S3 \"GET Object acl\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"GET Object acl"},"404":{i:0.000897401705115917,u:"../Content/S3 API Support/OperationsObjects/HeadObject.htm",a:"[S3 API Method] For the Amazon S3 \"HEAD Object\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"HEAD Object"},"405":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsObjects/OptionsObject.htm",a:"[S3 API Method] For the Amazon S3 \"OPTIONS Object\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"OPTIONS Object"},"406":{i:0.00167489631766637,u:"../Content/S3 API Support/OperationsObjects/PostObject.htm",a:"[S3 API Method] For the Amazon S3 \"POST Object\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a form field, parameter, header, element, or special error from the Amazon S3 specification ...",t:"POST Object"},"407":{i:0.00402973392361585,u:"../Content/S3 API Support/OperationsObjects/PostObjectRestore.htm",a:"[S3 API Method] For the Amazon S3 \"POST Object restore\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"POST Object restore"},"408":{i:0.00147010246032016,u:"../Content/S3 API Support/OperationsObjects/PutObject.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Object\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"PUT Object"},"409":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsObjects/PutObjectAcl.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Object acl\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"PUT Object acl"},"410":{i:0.00124956779549234,u:"../Content/S3 API Support/OperationsObjects/PutObjectCopy.htm",a:"[S3 API Method] For the Amazon S3 \"PUT Object - Copy\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"PUT Object - Copy"},"411":{i:0.00117292108778877,u:"../Content/S3 API Support/OperationsObjects/InitiateMultipartUpload.htm",a:"[S3 API Method] For the Amazon S3 \"Initiate Multipart Upload\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification ...",t:"Initiate Multipart Upload"},"412":{i:0.000843889702738945,u:"../Content/S3 API Support/OperationsObjects/UploadPart.htm",a:"[S3 API Method] For the Amazon S3 \"Upload Part\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for this ...",t:"Upload Part"},"413":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsObjects/UploadPartCopy.htm",a:"[S3 API Method] For the Amazon S3 \"Upload Part - Copy\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification for ...",t:"Upload Part - Copy"},"414":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsObjects/CompleteMultipartUpload.htm",a:"[S3 API Method] For the Amazon S3 \"Complete Multipart Upload\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification ...",t:"Complete Multipart Upload"},"415":{i:0.000555942749785594,u:"../Content/S3 API Support/OperationsObjects/AbortMultipartUpload.htm",a:"[S3 API Method] For the Amazon S3 \"Abort Multipart Upload\" operation, the HyperStore system supports the S3  Common Request Headers  and  Common Response Headers  and also the operation-specific items listed below. If a parameter, header, element, or special error from the Amazon S3 specification ...",t:"Abort Multipart Upload"},});