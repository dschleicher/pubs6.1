define({"277":{i:0.00307627108861282,u:"../Content/Admin API/Storage Policies/DeleteStoragePolicy.htm",a:"[Admin API Method] Use this Admin API method to delete a storage policy, if the policy is not currently associated with any storage buckets. You cannot delete a policy that is being used by one or more buckets. If a policy is being used by some existing buckets and you do not want it to be available ...",t:"DELETE Storage Policy"},"278":{i:0.00155947786940971,u:"../Content/Admin API/Storage Policies/GetStoragePolicy.htm",a:"[Admin API Method] Use this Admin API method to retrieve a specified storage policy. Request Format Syntax GET /bppolicy[?policyId=xxx] Query Parameters policyId (Optional, string) System-generated unique identifier of the policy. Note that this is not the policy name (which is set by the ...",t:"GET Storage Policy"},"279":{i:0.00480332711512284,u:"../Content/Admin API/Storage Policies/GetStoragePolicyList.htm",a:"[Admin API Method] Use this Admin API method to retrieve a list of all storage policies that currently exist in your system. The full policies (policy definitions) are retrieved — not just a list of policy IDs. Optionally, you can filter the returned policy list by region, group ID, or policy ...",t:"GET Storage Policy List"},"280":{i:0.00167624644649196,u:"../Content/Admin API/Storage Policies/GetStoragePolicyUsage.htm",a:"[Admin API Method] Use this Admin API method to retrieve a list of the buckets that are using each storage policy. For all storage policies in the system, this method returns the policy ID and name and the corresponding list of buckets using that policy. Request Format Syntax GET ...",t:"GET Storage Policy Usage (Bucket List)"},"281":{i:0.00125382774638097,u:"../Content/Admin API/Storage Policies/PostReenableStoragePolicy.htm",a:"[Admin API Method] Use this Admin API method to re-enable a storage policy that you had previously disabled (with the  DELETE (Disable) Storage Policy  method). When you re-enable a storage policy, the policy once again becomes available for service users to assign to newly created buckets. Request ...",t:"POST (Re-Enable) Storage Policy"},"282":{i:0.00195033062778061,u:"../Content/Admin API/Storage Policies/PostUpdatedStoragePolicy.htm",a:"[Admin API Method] Use this Admin API method to revise an existing storage policy. Only the following policy attributes are allowed to be revised: Policy name and description Read/write consistency levels required by the policy Groups for which the policy is available Whether the policy is the ...",t:"POST Updated Storage Policy"},"283":{i:0.002800307515256,u:"../Content/Admin API/Storage Policies/PutNewStoragePolicy.htm",a:"[Admin API Method] Use this Admin API method to create a new storage policy. The system supports a configurable maximum number of policies [XREF] (default = 8). If this many policies already exist, the system will reject a request to create a new policy and will return an HTTP 403 response. Policies ...",t:"PUT New Storage Policy"},"284":{i:0.000555942749785594,u:"../Content/Admin API/System Monitoring/SystemMonitoringOverview.htm",a:"This group of Admin API methods is for monitoring the health and performance of your HyperStore system. There are methods for retrieving system and node statistics and for implementing system alert (notification) functionality. The Cloudian Management Console’s  Data Centers  interface,  Node Status ...",t:"Admin API Methods for System Monitoring"},"285":{i:0.000634701914397469,u:"../Content/Admin API/System Monitoring/DeleteNotificationRule.htm",a:"[Admin API Method] Use this Admin API method to delete a notification rule. Request Format Syntax DELETE /monitor/notificationrule?ruleId=xxx[?region=xxx] Query Parameters ruleId (Mandatory, string)  ruleId of the NotificationRule object to delete. If you do not know the ruleId of the rule that you ...",t:"DELETE Notification Rule"},"286":{i:0.00183929416875057,u:"../Content/Admin API/System Monitoring/GetEventList.htm",a:"[Admin API Method] Use this Admin API method to retrieve the list of current monitoring events associated with a specified node. These are noteworthy system events as defined by an existing notification rule, such as a threshold being exceeded. Request Format Syntax GET ...",t:"GET Event List"},"287":{i:0.000634701914397469,u:"../Content/Admin API/System Monitoring/GetMonitoredNodeList.htm",a:"[Admin API Method] Use this method to retrieve the list of nodes that are being monitored by the HyperStore monitoring function, in a specified service region. Request Format Syntax GET /monitor/nodelist[?region=xxx] Query Parameters region (Optional, string) Name of the service region for which the ...",t:"GET Monitored Node List"},"288":{i:0.00134131761938123,u:"../Content/Admin API/System Monitoring/GetMonitoringDataForNode.htm",a:"[Admin API Method] Use this Admin API method to retrieve detailed monitoring data for a specified node. The data includes S3 transaction performance statistics for the node, disk availability and disk I/O statistics, service status for each HyperStore service running on the node, and other ...",t:"GET Monitoring Data for Node"},"289":{i:0.00183926950594433,u:"../Content/Admin API/System Monitoring/GetMonitoringDataForRegion.htm",a:"[Admin API Method] Use this Admin API method to retrieve system monitoring data for a specified HyperStore service region. The data includes S3 transaction performance statistics and disk space statistics, aggregated for the region as a whole. If no region is specified in the request, monitoring ...",t:"GET Monitoring Data for Region"},"290":{i:0.00328934308918248,u:"../Content/Admin API/System Monitoring/GetNotificationRules.htm",a:"[Admin API Method] Use this Admin API method to retrieve the list of notification rules that currently exist in the HyperStore system. This includes the set of rules that are included in the system by default and also any rules that you have created. Request Format Syntax GET ...",t:"GET Notification Rules"},"291":{i:0.000990220937272532,u:"../Content/Admin API/System Monitoring/PostEventAcknowledgement.htm",a:"[Admin API Method] Use this Admin API method to acknowledge one or more monitoring events for which the system has generated a notification. This changes the event notification’s status to \"acknowleged\". Request Format Syntax POST /monitor/acknowledgeevents?nodeId=xxx[\u0026region=xxx] Query Parameters ...",t:"POST Event Acknowledgement"},"292":{i:0.00178526934307123,u:"../Content/Admin API/System Monitoring/PostNotificationRuleEnableDisable.htm",a:"[Admin API Method] Use this Admin API method to disable one or more existing notification rules, or to enable one or more rules that are currently disabled. When a monitoring rule is disabled, the rule will not be used to trigger system event notifications. A record of the rule remains in the ...",t:"POST Notification Rule Enable/Disable"},"293":{i:0.00183984228040441,u:"../Content/Admin API/System Monitoring/PostUpdatedNotificationRule.htm",a:"[Admin API Method] Use this Admin API method to modify an existing notification rule. Request Format Syntax POST /monitor/notificationrule Query Parameters None. Request Payload NotificationRule  JSON object. Response Format Response Status In addition to the  Common Response Status Codes , this ...",t:"POST Updated Notification Rule"},"294":{i:0.00251650032966483,u:"../Content/Admin API/System Monitoring/PutNewNotificationRule.htm",a:"[Admin API Method] Use this Admin API method to create a new rule for having the system notify system administrators about a specified system event. The rule details, in the JSON-encoded request body, indicate the system event that will trigger a notification and how the system should implement the ...",t:"PUT New Notification Rule"},"295":{i:0.000555942749785594,u:"../Content/Admin API/System Services/SystemServicesOverview.htm",a:"Admin API Methods for System Services This group of Admin API methods implements various system tasks. GET License Info GET System Version POST Deleted User Cleanup POST Storage Policy Deletion Processing POST User Count Repair",t:"Admin API Methods for System Services"},"296":{i:0.00175816354023244,u:"../Content/Admin API/System Services/GetLicenseInfo.htm",a:"[Admin API Method] Use this Admin API method to retrieve information about your Cloudian HyperStore license. This includes the expiration date of your license. Request Format Syntax GET /system/license Query Parameters None. Request Payload None. Response Format Response Status This method returns ...",t:"GET License Info"},"297":{i:0.0157614934004526,u:"../Content/Admin API/System Services/GetSystemVersion.htm",a:"[Admin API Method] Use this Admin API method to retrieve version information for your HyperStore system. Request Format Syntax GET /system/version Query Parameters None. Request Payload None. Response Format Response Status This method returns only the  Common Response Status Codes Response Payload ...",t:"GET System Version"},"298":{i:0.0023575283757718,u:"../Content/Admin API/System Services/PostDeletedUserCleanup.htm",a:"[Admin API Method] Use this Admin API method to try to complete the user deletion process for users for whom the deletion process failed to complete on the original attempt. These are users who are stuck in \"Deleting\" status for one reason or another. This operation is invoked once a day by the ...",t:"POST Deleted User Cleanup"},"299":{i:0.0023575283757718,u:"../Content/Admin API/System Services/PostStoragePolicyDeletionProcessing.htm",a:"[Admin API Method] Use this Admin API method to process any pending storage policy deletion jobs. System operators can initiate the deletion of an unused storage policy (a storage policy that is not assigned to any buckets) through the  DELETE Storage Policy  method, or through the CMC. This ...",t:"POST Storage Policy Deletion Processing"},"300":{i:0.000650453747319845,u:"../Content/Admin API/System Services/PostUserCountRepair.htm",a:"[Admin API Method] Use this method if you have reason to suspect that user counts in your audit data are inaccurate. This method will synchronize the user counts in Redis (which are used in audit data) to the data in the Cassandra UserInfo table. Request Format Syntax POST /system/repairusercount ...",t:"POST User Count Repair"},"301":{i:0.000555942749785594,u:"../Content/Admin API/Usage Reporting/UsageReportingOverview.htm",a:"This group of Admin API methods is for managing HyperStore usage reporting. The usage reporting feature captures service usage data for users and groups. There are API methods for aggregating usage data and ensuring its accuracy — many of these methods are invoked regularly by HyperStore system cron ...",t:"Admin API Methods for Usage Reporting"},"302":{i:0.000598902294119344,u:"../Content/Admin API/Usage Reporting/DeleteUsageData.htm",a:"[Admin API Method] Use this Admin API method to delete (from Cassandra’s Reports keyspace) service usage data of a specified granularity, from a specified time period. Note that for the specified granulariy and time period, usage data for all groups and users will be deleted. In a multi-region ...",t:"DELETE Usage Data"},"303":{i:0.00868871562856365,u:"../Content/Admin API/Usage Reporting/GetUsageData.htm",a:"[Admin API Method] Use this Admin API method to retrieve S3 service usage data for a HyperStore user or for a user group. In a multi-region HyperStore system, only the Admin Service in the default region supports this method. To retrieve usage data from non-default regions, submit the request to the ...",t:"GET Usage Data"},"304":{i:0.0240938123808408,u:"../Content/Admin API/Usage Reporting/PostUsageDataForActiveUsers.htm",a:"[Admin API Method] The HyperStore system’s Redis QoS database maintains per-user and per-group counters for stored bytes and number of stored objects, based on transaction data that it receives from the S3 Service. Use this Admin API method to write these per-user and per-group stored bytes and ...",t:"POST Usage Data for Active Users"},"305":{i:0.0157099419472521,u:"../Content/Admin API/Usage Reporting/PostUsageDataForAllUsers.htm",a:"[Admin API Method] Use this Admin API method to post storage usage data (write stored bytes and stored object counts from the Redis QoS database over to the Cassanda \"Raw\" column family) for all users, not just active users. For background on posting storage usage data to Cassandra see  POST Usage ...",t:"POST Usage Data for All Users"},"306":{i:0.0184488139473393,u:"../Content/Admin API/Usage Reporting/PostUsageDataRepairForActiveUsers.htm",a:"[Admin API Method] Use this Admin API method to repair usage data for active or \"dirty\" users. For background information on usage data repair, see  Validating Usage Data for Storage Levels . For purposes of this method, a dirty user is defined as a user whose storage bytes and/or storage object ...",t:"POST Usage Data Repair for Active Users"},"307":{i:0.00206636624137107,u:"../Content/Admin API/Usage Reporting/PostUsageDataRepairForGroupOrSystem.htm",a:"[Admin API Method] Use this Admin API method to correct discrepancies that can develop over time between Cassandra and Redis records regarding service usage statistics — specifically for Storage Bytes and Storage Objects. This method can be executed for a specified group (that is, for every user in ...",t:"POST Usage Data Repair for Group or System"},"308":{i:0.00161015379672535,u:"../Content/Admin API/Usage Reporting/PostUsageDataRepairForUser.htm",a:"[Admin API Method] This method performs usage data repair for a single specified user. For background information on usage data repair, see  Validating Usage Data for Storage Levels . This operation does not update the group-level usage counters for the group to which the user belongs. For ...",t:"POST Usage Data Repair for User"},"309":{i:0.0174170165757041,u:"../Content/Admin API/Usage Reporting/PostUsageDataRollup.htm",a:"[Admin API Method] Use this method to trigger the generation of \"rollup\" (aggregated) service usage data from more granular data. Hourly rollup data is derived from \"raw\" transactional data. Daily rollup data and monthly rollup data are derived from hourly rollup data. This method does not return ...",t:"POST Usage Data Rollup"},"310":{i:0.000822992189653879,u:"../Content/Admin API/User Management/UserManagementOverview.htm",a:"This group of Admin API methods is for managing HyperStore service user accounts. This includes support for creating, editing, and deleting accounts. It also supports management of users\u0027 security credentials and the assignment of rating plans to users. The Cloudian Management Console’s  Manage ...",t:"Admin API Methods for User Management"},"311":{i:0.00280954192451209,u:"../Content/Admin API/User Management/DeleteUser.htm",a:"[Admin API Method] Use this Admin API method to delete a specified user from the system. The user will be removed from his group; his security credentials will be deleted; and his S3 buckets and stored objects will be deleted. Once deleted, a user’s buckets and objects will not be recoverable. Note ...",t:"DELETE User"},"312":{i:0.000589254625330526,u:"../Content/Admin API/User Management/DeleteUsersProfileData.htm",a:"[Admin API Method] After deleting a user, you can use this Admin API method if you want to purge a deleted user’s profile information from the Cassandra database. Otherwise, the deleted user’s profile information is retained in Cassandra indefinitely. Note that if you purge a deleted user’s profile ...",t:"DELETE User\u0027s Profile Data"},"313":{i:0.000839689817605182,u:"../Content/Admin API/User Management/DeleteUsersS3Credential.htm",a:"[Admin API Method] Use this Admin API method to delete a user’s S3 credential. You will identify the credential by supplying the access key. You can delete active credentials as well as inactive ones (you do not need to deactivate a credential before deleting it). Note that this method is for users ...",t:"DELETE User\u0027s S3 Credential"},"314":{i:0.00114925144631724,u:"../Content/Admin API/User Management/GetUser.htm",a:"[Admin API Method] Use this Admin API method to retrieve the profile of a single specified user. The profile includes the user’s service status, canonical ID, and contact information, among other items. Request Format Syntax GET /user?userId=xxx\u0026groupId=xxx Query Parameters userId (Mandatory, ...",t:"GET User"},"315":{i:0.00615355650911636,u:"../Content/Admin API/User Management/GetUserList.htm",a:"[Admin API Method] Use this Admin API method to retrieve a list of users from a specified user group. For each user the user’s full profile is returned. You can optionally filter the search by user ID prefix. This method supports limiting the number of users who are returned for each ...",t:"GET User List"},"316":{i:0.00154711718330446,u:"../Content/Admin API/User Management/GetUsersRatingPlan.htm",a:"[Admin API Method] Use this Admin API method to retrieve a user’s assigned rating plan (the plan that specifies how much to charge for service usage). This retrieves the full rating content, not just a rating plan ID. Request Format Syntax GET /user/ratingPlan?userId=xxx\u0026groupId=xxx[\u0026region=xxx] ...",t:"GET User\u0027s Rating Plan"},"317":{i:0.000686433020209492,u:"../Content/Admin API/User Management/GetUsersRatingPlanId.htm",a:"[Admin API Method] Use this Admin API method to find out which rating plan is assigned to a specified user. This method returns only the rating plan ID — not the full rating plan object. Request Format Syntax GET /user/ratingPlanId?userId=xxx\u0026groupId=xxx[\u0026region=xxx] Query Parameters userId ...",t:"GET User\u0027s Rating Plan ID"},"318":{i:0.00131504501183656,u:"../Content/Admin API/User Management/GetUsersS3Credential.htm",a:"[Admin API Method] Use this Admin API method to retrieve the S3 credential object associated with a specified S3 access key. Along with the access key the credential object includes the secret key, creation date, and the credential’s status (active/inactive). Request Format Syntax GET ...",t:"GET User\u0027s S3 Credential"},"319":{i:0.00168764610013869,u:"../Content/Admin API/User Management/GetUsersS3CredentialsList.htm",a:"[Admin API Method] The HyperStore system allows a user to have multiple S3 security credentials. (The maximum number is configurable.) Use this Admin API method to retrieve all of a user’s existing S3 security credentials, including inactive credentials as well as active ones. Request Format Syntax ...",t:"GET User\u0027s S3 Credentials List"},"320":{i:0.00131504501183656,u:"../Content/Admin API/User Management/GetUsersS3CredentialsListActive.htm",a:"[Admin API Method] Use this Admin API method to retrieve only a user’s active S3 credetials. (To retrieve all of a user’s S3 credentials — inactive as well as active — use the  GET User\u0027s S3 Credentials List  method instead.) Request Format Syntax GET ...",t:"GET User\u0027s S3 Credentials List (Active)"},"321":{i:0.000589254625330526,u:"../Content/Admin API/User Management/GetVerificationOfUsersCmcPassword.htm",a:"[Admin API Method] Use this Admin API method to verify that a user’s supplied password for the Cloudian Management Console (CMC) is the correct password for that user. Request Format Syntax GET /user/password/verify?userId=xxx\u0026groupId=xxx\u0026password=xxx Query Parameters userId (Mandatory, string) User ...",t:"GET Verification of User\u0027s CMC Password"},"322":{i:0.00252326490090684,u:"../Content/Admin API/User Management/PostUpdatedUser.htm",a:"[Admin API Method] Use this Admin API method to update profile information for an existing user. For example, you can change the user’s user type (such as promoting a regular user to become a group administrator), or suspend (or reactivate) a user, or update a user’s contact information. If you ...",t:"POST Updated User"},"323":{i:0.000995097726103754,u:"../Content/Admin API/User Management/PostUsersCmcPassword.htm",a:"[Admin API Method] Use this Admin API method to create or update a user’s Cloudian Management Console (CMC) password. Note that there is no PUT method for user’s CMC passwords — you use this POST method for creating a user’s initial password as well as for subsequently changing the password. The ...",t:"POST User\u0027s CMC Password"},"324":{i:0.00128900533047489,u:"../Content/Admin API/User Management/PostUsersRatingPlanId.htm",a:"[Admin API Method] Use this Admin API method to assign an existing rating plan to a user (for billing purposes). To create a rating plan, use the  PUT New Rating Plan  method. Request Format Syntax POST /user/ratingPlanId?userId=xxx\u0026groupId=xxx\u0026ratingPlanId=xxx[\u0026region=xxx] Query Parameters userId ...",t:"POST User\u0027s Rating Plan ID"},"325":{i:0.000589254625330526,u:"../Content/Admin API/User Management/PostUsersS3Credential.htm",a:"[Admin API Method] Use this method to have the HyperStore system store an S3 credential (access key and corresponding secret key) that you supply in the request. The user can then use this credential to access the HyperStore S3 storage system. To have the system generate a credential (rather than ...",t:"POST User\u0027s S3 Credential"},"326":{i:0.000589254625330526,u:"../Content/Admin API/User Management/PostUsersS3CredentialStatus.htm",a:"[Admin API Method] Use this Admin API method to deactivate a user’s S3 credential, or to reactive a credential that is currently deactivated. If you deactivate a credential, the user will not be able to use that credential to access the HyperStore S3 storage system. However, the credential will ...",t:"POST User\u0027s S3 Credential Status"},"327":{i:0.00190983664280289,u:"../Content/Admin API/User Management/PutNewUser.htm",a:"[Admin API Method] Use this Admin API method to create a new user of the HyperStore S3 service. You will specify basic information about the user — such as their user ID and user group — in the  UserInfo  JSON object in the request body. Upon creation of the user, the system will automatically ...",t:"PUT New User"},"328":{i:0.000839689817605182,u:"../Content/Admin API/User Management/PutUsersNewS3Credential.htm",a:"[Admin API Method] Use this Admin API method to have the HyperStore system generate a new S3 security credential (access key and secret key) for a specified user. The maximum number of credentials per user is set by the credentials.user.max property in mts.properties.erb. The default value is 5. ...",t:"PUT User\u0027s New S3 Credential"},"329":{i:0.000555942749785594,u:"../Content/Admin API/Whitelist for Free Traffic/WhitelistOverview.htm",a:"This group of Admin API methods is for managing a billing \"whitelist\" of source IP addresses or subnets that you want to allow to have free S3 traffic with the HyperStore storage service. For S3 requests originating from addresses on this whitelist, a special rating plan is used that applies zero ...",t:"Admin API Methods for Whitelist"},"330":{i:0.00204634274651776,u:"../Content/Admin API/Whitelist for Free Traffic/GetWhitelist.htm",a:"[Admin API Method] Use this Admin API method to retrieve a specified whitelist. In the current HyperStore release only one whitelist is supported and its ID is \"Default-WL\". Request Format Syntax GET /whitelist?whitelistId=xxx Query Parameters whitelistId (Mandatory, string) Unique ID of the ...",t:"GET Whitelist"},"331":{i:0.000634701914397469,u:"../Content/Admin API/Whitelist for Free Traffic/GetWhitelistList.htm",a:"[Admin API Method] Use this Admin API method to retrieve a list of all whitelist IDs and corresponding display names. This method does not return whitelist content, only the whitelist IDs and names. To retrieve a complete whitelist use the  GET Whitelist  method. In the current HyperStore release ...",t:"GET Whitelist List"},"332":{i:0.00244331690599442,u:"../Content/Admin API/Whitelist for Free Traffic/PostUpdatedWhitelistViaRequestObject.htm",a:"[Admin API Method] Use this Admin API method to update the content of the one existing whitelist that the HyperStore system supports. You can modify the whitelist display name, its assigned rating plan, and the IP address or subnet list itself. You cannot change the unique ID of the whitelist, which ...",t:"POST Updated Whitelist Via Request Object"},"333":{i:0.00156873902415285,u:"../Content/Admin API/Whitelist for Free Traffic/PostUpdatedWhitelistViaUriParameter.htm",a:"[Admin API Method] Use this Admin API method to update the list of IP addresses and/or subnets that’s associated with the whitelist by passing the list membership as a URI parameter value. This method overwrites the existing whitelist with the new list specified in the URI. You must include all of ...",t:"POST Updated Whitelist Via URI Parameter"},"334":{i:0.000555942749785594,u:"../Content/Admin API/Data Objects/DataObjectsOverview.htm",a:"[Admin API Object] This section describes data objects that are passed as request or response payloads via the HyperStore Admin API. The objects are documented in alphabetical order. HyperStore Admin API response payloads are JSON encoded objects. Per the JSON specification (http://www.json.org), ...",t:"Admin API Data Objects"},"335":{i:0.00271237961557792,u:"../Content/Admin API/Data Objects/Bill.htm",a:"[Admin API Object] The Bill object is returned as the response payload for these Admin API operations: POST User\u0027s Bill GET User\u0027s Bill The Bill object consists of the following attributes: billID (string) Unique bill ID. canonicalUserId (string) System-generated canonical user ID for the user. ...",t:"Bill"},"336":{i:0.0017517248608066,u:"../Content/Admin API/Data Objects/BillItem.htm",a:"[Admin API Object] A list of BillItem objects is nested within the  RegionBill  object. The BillItem object consists of the following attributes: item (string) Usage type being billed for. Types are \"SB\" (storage bytes), \"BI\" (bytes in), \"BO\" (bytes out), \"HG\" (HTTP GETs), \"HP\" (HTTP PUTs), \"HD\" ...",t:"BillItem"},"337":{i:0.00504844875480481,u:"../Content/Admin API/Data Objects/BucketProtectionPolicy.htm",a:"[Admin API Object] The BucketProtectionPolicy object is returned as the response payload for these Admin API operations: GET Storage Policy GET Storage Policy List POST Updated Storage Policy PUT New Storage Policy The BucketProtectionPolicy object is required as the request payload for these Admin ...",t:"BucketProtectionPolicy"},"338":{i:0.00126255845476936,u:"../Content/Admin API/Data Objects/DiskInfo.htm",a:"[Admin API Object] A list of DiskInfo objects — one for each disk on the node — is nested within the  MonitorNodeInfo  object. The DiskInfo object consists of the following attributes: deviceName (string) Disk drive device name. diskAvailKb (string) Total remaining free space on the disk in number ...",t:"DiskInfo"},"339":{i:0.000836507899379518,u:"../Content/Admin API/Data Objects/EventsAck.htm",a:"[Admin API Object] The EventsAck object is required as the request payload for this Admin API operation: POST Event Acknowledgement The EventsAck object consists of the attributes below. Each attribute description indicates whether the attribute is mandatory or optional when this object is ...",t:"EventsAck"},"340":{i:0.00204734877516929,u:"../Content/Admin API/Data Objects/GroupInfo.htm",a:"[Admin API Object] The GroupInfo object is returned as the response payload for these Admin API operations: GET Group GET Group List The GroupInfo object is required as the request payload for these Admin API operations: POST Updated Group PUT New Group The GroupInfo object consists of the ...",t:"GroupInfo"},"341":{i:0.00130317206648227,u:"../Content/Admin API/Data Objects/LicenseData.htm",a:"[Admin API Object] The LicenseData object is returned as the response payload for this Admin API operation: GET License Info The LicenseData object consists of the following attributes: expiration (number) License expiration in UTC milliseconds. gracePeriod (number) After license expiration, the ...",t:"LicenseData"},"342":{i:0.00133765127856966,u:"../Content/Admin API/Data Objects/MonitoringEvent.htm",a:"[Admin API Object] A list of MonitoringEvent objects is returned as the response payload for this Admin API operation: GET Event List The MonitoringEvent object consists of the attributes below. ack ( boolean) Whether the event has been acknowledged, true or false. This will be false unless you ...",t:"MonitoringEvent"},"343":{i:0.00166260361587165,u:"../Content/Admin API/Data Objects/MonitorNodeInfo.htm",a:"[Admin API Object] The MonitorNodeInfo object is returned as the response payload for this Admin API operation: GET Monitoring Data for Node The MonitorNodeInfo object consists of the attributes below. Within the MonitorNodeInfo object, all statistics of type MonitorStat are formatted as  ...",t:"MonitorNodeInfo"},"344":{i:0.00283403167669666,u:"../Content/Admin API/Data Objects/MonitorSystemInfo.htm",a:"[Admin API Object] The MonitorSystemInfo object is returned as the response payload for this Admin API operation: GET Monitoring Data for Region The MonitorSystemInfo object consists of the attributes below. Within the MonitorSystemInfo object, all statistics of type MonitorStat are formatted as  ...",t:"MonitorSystemInfo"},"345":{i:0.00176051034133245,u:"../Content/Admin API/Data Objects/NodeStatus.htm",a:"[Admin API Object] A list of NodeStatus objects — one for each node in the service region — is nested within the  MonitorSystemInfo  object. The NodeStatus object consists of the following attributes: hostname (string) Hostname of the node. ipaddr (string) This attribute will have value null or ...",t:"NodeStatus"},});