# ![LOGO](logo.png) Zoom **flow**ground Connector

## Description

A generated **flow**ground connector for the Zoom API (version 2.0.0).

Generated from: https://api.apis.guru/v2/specs/zoom.us/2.0.0/swagger.json<br/>
Generated at: 2019-05-07T17:45:09+03:00

## API Description

API Description

## Authorization

Supported authorization schemes:
- API Key
## Actions

### List sub accounts

> List all the sub accounts under the master account.

*Tags:* `Accounts`

#### Input Parameters
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Create a sub account

> Create a sub account under the master account <aside>Your account must be a master account and have this privilege to create sub account. Zoom only assign this privilege to trusted partner. The created user will not receive the confirmation email.</aside>

*Tags:* `Accounts`

### Disassociate an account

> Disassociate a sub account from the master account

*Tags:* `Accounts`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Retrieve a sub account

> Retrieve a sub account under the master account <aside>Your account must be a master account and have this privilege to get sub account. Zoom only assign this privilege to trusted partner</aside>

*Tags:* `Accounts`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Retrieve billing information for a sub account

> Retrieve billing information for a sub account under the master account

*Tags:* `Billing`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Update billing information for a sub account

> Update billing information for a sub account under the master account <aside>Only for the sub account which is a paid account and paid by master account</aside>

*Tags:* `Billing`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Update a sub account's options

> Update a sub account's options under the master account

*Tags:* `Accounts`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Retrieve plan information for a sub account

> Retrieve plan information for a sub account under the master account  <aside>Only for the sub account which is paid by master account</aside>

*Tags:* `Billing`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Subscribe plans for a sub account

> Subscribe plans for a sub account of the master account <aside>Can only subscribe plans for the sub account which is a free account and paid by master account</aside>

*Tags:* `Billing`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Add an additional plan for sub account

> Add an additional plan for sub account <aside>Can only add an Additional plan for the sub account which is a paid account and paid by master account</aside>

*Tags:* `Billing`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Update an additional plan for sub account

> Update an additional plan for sub account<aside>Can only update an Additional plan for the sub account which is a paid account and paid by master account</aside>

*Tags:* `Billing`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Update a base plan for a sub account

> Update a base plan for a sub account <aside>Can only update a base plan for the sub account which is a paid account and paid by master account</aside>

*Tags:* `Billing`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Retrieve a sub account's settings

> Retrieve a sub account's settings under the master account

*Tags:* `Accounts`

#### Input Parameters
* `accountId` - _required_ - The account ID

### Update a sub account's settings

> Update a sub account's settings under the master account

*Tags:* `Accounts`

#### Input Parameters
* `accountId` - _required_ - The account ID

### List groups

> List groups under your account

*Tags:* `Groups`

### Create a group

> Create a group under your account

*Tags:* `Groups`

### Delete a group

> Delete a group under your account

*Tags:* `Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID

### Retrieve a group

> Retrieve a group under your account

*Tags:* `Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID

### Update a group

> Update a group under your account

*Tags:* `Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID

### List a group's members

> List a group's members under your account

*Tags:* `Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Add group members

> Add members to a group under your account

*Tags:* `Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID

### Delete a group member

> Delete a member from a group under your account

*Tags:* `Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID
* `memberId` - _required_ - The member ID

### List IM Groups

> List IM groups under your account

*Tags:* `IM Groups`

### Create an IM Group

> Create a IM Group under your account

*Tags:* `IM Groups`

### Delete an IM Group

> Delete an IM Group under your account

*Tags:* `IM Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID

### Retrieve an IM Group

> Retrieve an IM Group under your account

*Tags:* `IM Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID

### Update an IM Group

> Update an IM Group under your account

*Tags:* `IM Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID

### List an IM Group's members

> List an IM Group's members under your account

*Tags:* `IM Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Add IM Group members

> Add members to an IM Group under your account

*Tags:* `IM Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID

### Delete an IM Group member

> Delete a member from an IM Group under your account

*Tags:* `IM Groups`

#### Input Parameters
* `groupId` - _required_ - The group ID
* `memberId` - _required_ - The member ID

### Delete a meeting

*Tags:* `Meetings`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID
* `occurrence_id` - _optional_ - The meeting occurrence ID

### Retrieve a meeting

> Retrieve a meeting's details

*Tags:* `Meetings`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID

### Update a meeting

> Update a meeting's details

*Tags:* `Meetings`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID

### Delete a meeting's recordings

*Tags:* `Cloud Recording`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
* `action` - _optional_ - The recording delete action
    Possible values: trash, delete.

### Retrieve a meeting's all recordings

*Tags:* `Cloud Recording`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.

### Recover a meeting's recordings

*Tags:* `Cloud Recording`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.

### Delete one meeting recording file

*Tags:* `Cloud Recording`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
* `recordingId` - _required_ - The recording ID
* `action` - _optional_ - The recording delete action
    Possible values: trash, delete.

### Recover a meeting one recording

*Tags:* `Cloud Recording`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
* `recordingId` - _required_ - The recording ID

### List a meeting's registrants

> List registrants of a meeting

*Tags:* `Meetings`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID
* `occurrence_id` - _optional_ - The meeting occurrence ID
* `status` - _optional_ - The registrant status
    Possible values: pending, approved, denied.
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Add a meeting registrant

> Register a participant for a meeting

*Tags:* `Meetings`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID
* `occurrence_ids` - _optional_ - Occurrence IDs, could get this value from Meeting Get API. Multiple value separated by comma.

### Update a meeting registrant's status

*Tags:* `Meetings`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID
* `occurrence_id` - _optional_ - The meeting occurrence ID

### Update a meeting's status

*Tags:* `Meetings`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID

### Retrieve CRC Port Usage

> Get CRC Port usage hour by hour for a specified time period <aside class='notice'>We will report a maximum of one month. For example, if "from" is set to "2017-08-05" and "to" is "2017-10-10" we will adjust "from" to "2017-09-10"</aside>

*Tags:* `Dashboards`

#### Input Parameters
* `from` - _required_ - Start Date
* `to` - _required_ - End Date

### Retrieve IM

> Retrieve metrics of Zoom IM

*Tags:* `Dashboards`

#### Input Parameters
* `from` - _required_ - Start Date
* `to` - _required_ - End Date
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### List meetings

> List live meetings or past meetings for a specified period

*Tags:* `Dashboards`

#### Input Parameters
* `type` - _optional_ - The meeting type
    Possible values: past, pastOne, live.
* `from` - _required_ - Start Date
* `to` - _required_ - End Date
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### Retrieve meeting detail

> Retrieve live or past meetings detail

*Tags:* `Dashboards`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
* `type` - _optional_ - The meeting type
    Possible values: past, pastOne, live.

### Retrieve meeting participants

> Retrieve live or past meetings participants

*Tags:* `Dashboards`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
* `type` - _optional_ - The meeting type
    Possible values: past, pastOne, live.
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### List meeting participants QOS

> Retrieve list of live or past meetings participants quality of service

*Tags:* `Dashboards`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
* `type` - _optional_ - The meeting type
    Possible values: past, live.
* `page_size` - _optional_ - Number of items returned per page
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### Retrieve sharing/recording details of meeting participant

> Retrieve sharing/recording details of live or past meetings participant

*Tags:* `Dashboards`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
* `type` - _optional_ - The meeting type
    Possible values: past, live.
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### Retrieve meeting participant QOS

> Retrieve live or past meetings participant quality of service

*Tags:* `Dashboards`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
* `participantId` - _required_ - The participant ID, such as 16778240
* `type` - _optional_ - The meeting type
    Possible values: past, live.

### List webinars

> List live webinars or past webinars for a specified period

*Tags:* `Dashboards`

#### Input Parameters
* `type` - _optional_ - The webinar type
    Possible values: past, live.
* `from` - _required_ - Start Date
* `to` - _required_ - End Date
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### Retrieve webinar detail

> Retrieve live  or past webinars detail

*Tags:* `Dashboards`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
* `type` - _optional_ - The webinar type
    Possible values: past, live.

### Retrieve webinar participants

> Retrieve live or past webinar participants

*Tags:* `Dashboards`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
* `type` - _optional_ - The webinar type
    Possible values: past, live.
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### List webinar participant QOS

> Retrieve list of live or past webinar participants quality of service

*Tags:* `Dashboards`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
* `type` - _optional_ - The webinar type
    Possible values: past, live.
* `page_size` - _optional_ - Number of items returned per page
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### Retrieve sharing/recording details of webinar participant

> Retrieve sharing/recording details of live or past webinar participant

*Tags:* `Dashboards`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
* `type` - _optional_ - The webinar type
    Possible values: past, live.
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### Retrieve webinar participant QOS

> Retrieve live or past webinar participant quality of service

*Tags:* `Dashboards`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
* `participantId` - _required_ - The participant ID, such as 16778240
* `type` - _optional_ - The webinar type
    Possible values: past, live.

### List Zoom Rooms

> List all zoom rooms on account

*Tags:* `Dashboards`

#### Input Parameters
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Retrieve Zoom Room

> Retrieve zoom room on account

*Tags:* `Dashboards`

#### Input Parameters
* `zoomroomId` - _required_ - The Zoom Room ID
* `from` - _required_ - Start Date
* `to` - _required_ - End Date
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Retrieve daily report

> Retrieve daily report for one month, can only get daily report for recent 6 months.

*Tags:* `Reports`

#### Input Parameters
* `year` - _optional_ - Year for this report
* `month` - _optional_ - Month for this report

### Retrieve meeting details report

> Retrieve ended meeting details report

*Tags:* `Reports`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.

### Retrieve meeting participants report

> Retrieve ended meeting participants report

*Tags:* `Reports`

#### Input Parameters
* `meetingId` - _required_ - The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### Retrieve telephone report

> Retrieve telephone report for a specified period <aside>Toll Report API is provided for enabled 'Toll Report' option.</aside>

*Tags:* `Reports`

#### Input Parameters
* `type` - _optional_ - Audio type
    Possible values: 1, 2.
* `from` - _required_ - Start Date
* `to` - _required_ - End Date
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Retrieve hosts report

> Retrieve active or inactive hosts report for a specified period

*Tags:* `Reports`

#### Input Parameters
* `type` - _optional_ - Active hosts or inactive hosts
    Possible values: active, inactive.
* `from` - _required_ - Start Date
* `to` - _required_ - End Date
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Retrieve meetings report

> Retrieve ended meetings report for a specified period

*Tags:* `Reports`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `from` - _required_ - Start Date
* `to` - _required_ - End Date
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### Retrieve webinar details report

> Retrieve ended webinar details report

*Tags:* `Reports`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.

### Retrieve webinar participants report

> Retrieve ended webinar participants report

*Tags:* `Reports`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

### Retrieve webinar polls report

> Retrieve ended webinar polls report

*Tags:* `Reports`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.

### Retrieve webinar Q&A report

> Retrieve ended webinar Q&A report

*Tags:* `Reports`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.

### List TSP dial-in numbers

> List TSP dial-in numbers under account

*Tags:* `TSP`

### List Users

> List users on your account

*Tags:* `Users`

#### Input Parameters
* `status` - _optional_ - User status
    Possible values: active, inactive, pending.
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Create a user

> Create a user on your account

*Tags:* `Users`

### Check a user's email

> Check if the user email exists.

*Tags:* `Users`

#### Input Parameters
* `email` - _required_ - User email

### Verify a user's zpk

> Check if the zpk is expired. The zpk is used to authenticate a user.

*Tags:* `Users`

#### Input Parameters
* `zpk` - _required_ - User zpk

### Delete a user

> Delete a user on your account

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `action` - _optional_ - Delete action type
    Possible values: disassociate, delete.

### Retrieve a user

> Retrieve a user on your account

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `login_type` - _optional_
    Possible values: 0, 1, 99, 100, 101.

### Update a user

> Update a user on your account

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### Delete a user's assistants

> Delete all of a user'sassitants

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### List a user's assistants

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### Add assistants

> Add assistants to a user

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### Delete a user's assistant

> Delete one of a user's assistants

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `assistantId` - _required_ - Assistant's ID

### List meetings

> List meetings for a user

*Tags:* `Meetings`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `type` - _optional_ - The meeting type
    Possible values: scheduled, live.
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Create a meeting

> Create a meeting for a user

*Tags:* `Meetings`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### Update a user's password

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### Upload a user's picture

> Upload a user's profile picture

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### List all the recordings

*Tags:* `Cloud Recording`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `from` - _required_ - Start Date
* `to` - _required_ - End Date
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `next_page_token` - _optional_ - Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
* `mc` - _optional_ - Query mc 
* `trash` - _optional_ - Query trash 

### Retrieve a user's settings

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `login_type` - _optional_
    Possible values: 0, 1, 99, 100, 101.

### Update a user's settings

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### Update a user's status

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### Revoke a user's SSO token

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### Retrieve a user's token

*Tags:* `Users`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `type` - _optional_ - User token type
    Possible values: token, zpk.

### List user's TSP accounts

*Tags:* `TSP`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### Add a user's TSP account

*Tags:* `TSP`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### Delete a user's TSP account

*Tags:* `TSP`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `tspId` - _required_ - TSP account index

### Retrieve a user's TSP account

*Tags:* `TSP`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `tspId` - _required_ - TSP account index

### Update a TSP account

> Update a user's TSP account

*Tags:* `TSP`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `tspId` - _required_ - TSP account index

### List webinars

> List webinars for a user

*Tags:* `Webinars`

#### Input Parameters
* `userId` - _required_ - The user ID or email address
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Create a webinar

> Create a webinar for a user

*Tags:* `Webinars`

#### Input Parameters
* `userId` - _required_ - The user ID or email address

### List webhooks

> List webhooks for a account

*Tags:* `Webhooks`

### Create a webhook

> Create a webhook for a account

*Tags:* `Webhooks`

### Switch webhook version

*Tags:* `Webhooks`

### Delete a webhook

*Tags:* `Webhooks`

#### Input Parameters
* `webhookId` - _required_ - The webhook ID

### Retrieve a webhook

*Tags:* `Webhooks`

#### Input Parameters
* `webhookId` - _required_ - The webhook ID

### Update a webhook

*Tags:* `Webhooks`

#### Input Parameters
* `webhookId` - _required_ - The webhook ID

### Delete a webinar

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID
* `occurrence_id` - _optional_ - The meeting occurrence ID

### Retrieve a webinar

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID

### Update a webinar

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID

### Remove a webinar's panelists

> Remove all panelists from a webinar

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID

### List a webinar's panelists

> List panelists for a webinar

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID

### Add a webinar panelist

> Add panelist to webinar

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID

### Remove a webinar panelist

> Remove a panelist from a webinar

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID
* `panelistId` - _required_ - The panelist ID

### List a webinar's registrants

> List registrants for a webinar

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID
* `occurrence_id` - _optional_ - The meeting occurrence ID
* `status` - _optional_ - The registrant status
    Possible values: pending, approved, denied.
* `page_size` - _optional_ - The amount of records returns within a single API call. 
* `page_number` - _optional_ - Current page number of returned records.

### Add a webinar registrant

> Add a registrant for a webinar

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID
* `occurrence_ids` - _optional_ - Occurrence IDs, could get this value from Webinar Get API. Multiple value separated by comma.

### Update a webinar registrant's status

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID
* `occurrence_id` - _optional_ - The meeting occurrence ID

### Update a webinar's status

*Tags:* `Webinars`

#### Input Parameters
* `webinarId` - _required_ - The webinar ID

## License

**flow**ground :- Telekom iPaaS / zoom-us-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
