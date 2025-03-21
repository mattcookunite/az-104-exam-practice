// Sample questions data with added sections
const questionsOriginal = [
  {
    "id": 1,
    "text": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains four subnets named Gateway, Perimeter, NVA, and Internal. Each subnet has a single network security group (NSG). The NVA subnet contains a network virtual appliance (NVA) that has five network interfaces and supports IP forwarding. You need to implement a solution that will meet the following requirements: Enable Azure-Microsoft peering for VNet1. Ensure that all traffic between the Perimeter subnet and the Internal subnet is routed through the NVA. Which two actions should you perform?",
    "instruction": "Select two actions that you should perform.",
    "options": [
      {
        "id": "A",
        "text": "Create a user-defined route that has a prefix of 0.0.0.0/0 and a next hop type of Internet.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Create a user-defined route that has a prefix of 10.0.0.0/16 and a next hop type of Virtual appliance.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Configure a service endpoint on the Internal subnet.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Enable peering from VNet1 to an Azure virtual network in the local region.",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "Configure a virtual network gateway on the Gateway subnet.",
        "isCorrect": true
      }
    ],
    "explanation": "To meet the requirements, you need to: 1) Configure a user-defined route that has a prefix matching VNet1's address space (10.0.0.0/16) with next hop type set to Virtual appliance to route traffic between subnets through the NVA, and 2) Configure a virtual network gateway on the Gateway subnet to enable Azure-Microsoft peering for VNet1.",
    "multiSelect": true,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 2,
    "text": "You have an Azure subscription that contains 10 virtual networks and 100 virtual machines. You need to limit the network traffic between specific virtual networks. What should you use?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Network security groups (NSGs)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Service endpoints",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Azure Firewall",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Virtual network peering",
        "isCorrect": true
      }
    ],
    "explanation": "Virtual network peering enables you to seamlessly connect networks in Azure. Once peered, the virtual networks appear as one for connectivity purposes. The traffic between virtual machines in peered virtual networks uses the Microsoft backbone infrastructure, and you can apply network security groups to control the flow of traffic between different subnets.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 3,
    "text": "You have an Azure subscription that contains a resource group named RG1. RG1 contains 100 virtual machines. Your company has administrators named Admin1 and Admin2. You need to ensure that Admin1 can manage the virtual machines in RG1 and Admin2 can monitor the virtual machines in RG1. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Assign the Contributor role to Admin1 and the Reader role to Admin2 for RG1.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Assign the Owner role to Admin1 and the Reader role to Admin2 for RG1.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Assign the Owner role to Admin1 and the Contributor role to Admin2 for RG1.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Create a new user-defined RBAC role.",
        "isCorrect": false
      }
    ],
    "explanation": "The Contributor role can manage everything except access to resources, which is suitable for Admin1 who needs to manage VMs. The Reader role can view existing resources, which is suitable for Admin2 who only needs to monitor the VMs.",
    "multiSelect": false,
    "section": "Manage Azure identities and governance"
  },
  {
    "id": 4,
    "text": "You have an Azure subscription named Sub1 that contains an Azure Storage account named storage1. You plan to copy a blob between two containers in storage1. Which command should you run?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "az storage blob copy start-batch",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "az storage blob copy start",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "az storage blob download",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "az storage blob upload",
        "isCorrect": false
      }
    ],
    "explanation": "The 'az storage blob copy start' command is used to copy a blob from one container to another within the same storage account or between storage accounts.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 5,
    "text": "You have an Azure subscription that contains a virtual machine named VM1. VM1 runs Windows Server 2019. You need to create an exact copy of VM1 named VM2. What should you do first?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Export the VM as a template.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Create a snapshot of VM1's OS disk.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Generalize VM1 by using Sysprep.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Create an Azure Storage account.",
        "isCorrect": false
      }
    ],
    "explanation": "To create an exact copy of a VM, you should first generalize the VM using Sysprep, which removes all personal account and security information. After this, you can create an image of the VM and use it to deploy identical VMs.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 6,
    "text": "You create an Azure Storage account named contosostorage. You need to create a file share named data that will be accessed by an Azure virtual machine. Which command should you run?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "az storage share create --name data --quota 10 --account-name contosostorage",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "az storage container create --name data --public-access blob --account-name contosostorage",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "az storage account create --name data --sku Standard_LRS --account-name contosostorage",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "az storage queue create --name data --account-name contosostorage",
        "isCorrect": false
      }
    ],
    "explanation": "The 'az storage share create' command is used to create a file share in Azure Storage. The '--quota' parameter specifies the maximum size of the file share in gigabytes.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 7,
    "text": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 is in the West US region. You create a VPN gateway named Gateway1 in VNet1. You need to create a site-to-site VPN to an on-premises location. Which additional Azure resources do you need?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "A local network gateway and a connection",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "A virtual network and a connection",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A local network gateway and a virtual network",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A connection and an ExpressRoute circuit",
        "isCorrect": false
      }
    ],
    "explanation": "To create a site-to-site VPN, you need a VPN gateway (which you already have), a local network gateway that represents your on-premises VPN device, and a connection resource that connects the VPN gateway to the local network gateway.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 8,
    "text": "You have an Azure subscription that contains a storage account named storage1 and a virtual machine named VM1 that runs Windows Server 2019. You need to ensure that VM1 can access storage1 by using the storage account key named key1. Which command should you run?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "az storage account keys list",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "az storage account keys renew",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "cmdkey /add:storage1.file.core.windows.net /user:storage1 /pass:key1",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "New-StorageAccountKey -ResourceGroupName 'ResourceGroup01' -Name 'storage1'",
        "isCorrect": false
      }
    ],
    "explanation": "The cmdkey command is used to create, list, and delete stored usernames and passwords. In this case, it's storing the credentials for the storage account so VM1 can access it using the storage account key.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 9,
    "text": "You have an Azure virtual machine named VM1 that runs Windows Server 2019. You need to attach a new 500-GB data disk to VM1. Which three actions should you perform in sequence?",
    "instruction": "Select the appropriate sequence of actions.",
    "options": [
      {
        "id": "A",
        "text": "From the Azure portal, stop VM1.",
        "isCorrect": false,
        "order": 1
      },
      {
        "id": "B",
        "text": "From the Azure portal, add a data disk.",
        "isCorrect": true,
        "order": 1
      },
      {
        "id": "C",
        "text": "From the Azure portal, modify the VM size.",
        "isCorrect": false,
        "order": 2
      },
      {
        "id": "D",
        "text": "From Server Manager, bring the disk online.",
        "isCorrect": false,
        "order": 3
      },
      {
        "id": "E",
        "text": "From Disk Management, initialize the disk.",
        "isCorrect": true,
        "order": 2
      },
      {
        "id": "F",
        "text": "From Disk Management, create a simple volume.",
        "isCorrect": true,
        "order": 3
      }
    ],
    "explanation": "The correct sequence is: 1) From the Azure portal, add a data disk to VM1. 2) From Disk Management in Windows Server, initialize the disk. 3) From Disk Management, create a simple volume to make the disk usable in the operating system.",
    "multiSelect": true,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 10,
    "text": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains a subnet named Subnet1. You need to configure the network security group (NSG) on Subnet1 to allow inbound Remote Desktop Protocol (RDP) access from the internet only to a specific VM. Which three actions should you perform in sequence?",
    "instruction": "Select the appropriate sequence of actions.",
    "options": [
      {
        "id": "A",
        "text": "Create an inbound security rule for port 3389 with a source of Internet.",
        "isCorrect": false,
        "order": 1
      },
      {
        "id": "B",
        "text": "Create an inbound security rule for port 3389 with a source of the specific VM's IP address.",
        "isCorrect": false,
        "order": 2
      },
      {
        "id": "C",
        "text": "Create an inbound security rule for port 3389 with a destination of the specific VM's IP address.",
        "isCorrect": true,
        "order": 3
      },
      {
        "id": "D",
        "text": "Create an NSG and associate it to Subnet1.",
        "isCorrect": true,
        "order": 1
      },
      {
        "id": "E",
        "text": "Create an NSG and associate it to the network interface of the specific VM.",
        "isCorrect": true,
        "order": 2
      },
      {
        "id": "F",
        "text": "Create an application security group.",
        "isCorrect": false,
        "order": 3
      }
    ],
    "explanation": "The correct sequence is: 1) Create an NSG and associate it to Subnet1. 2) Create an NSG and associate it to the network interface of the specific VM. 3) Create an inbound security rule for port 3389 with a destination of the specific VM's IP address to allow RDP access only to that VM.",
    "multiSelect": true,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 11,
    "text": "You have an Azure subscription that contains the resources shown in the following table. You need to ensure that Resource1 can only be accessed from VirtualNetwork1. What should you configure?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "A service endpoint on Subnet1",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "A network security group (NSG) linked to VirtualNetwork1",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Azure Active Directory (Azure AD) Privileged Identity Management (PIM)",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A private endpoint on VirtualNetwork1",
        "isCorrect": false
      }
    ],
    "explanation": "Service endpoints provide secure and direct connectivity to Azure services from a virtual network. With service endpoints, you can configure storage accounts to allow access only from a specific subnet within a virtual network, effectively securing your Azure service resources to your virtual network.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 12,
    "text": "You have an Azure subscription that contains a virtual machine scale set named VMSS1. VMSS1 is configured for autoscaling. You need to add a rule that increases the instance count by three when the average CPU usage exceeds 75 percent. Which Azure PowerShell command should you run?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Add-AzAutoscaleSetting",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Add-AzVmssExtension",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "New-AzAutoscaleRule",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Set-AzVmss",
        "isCorrect": false
      }
    ],
    "explanation": "The New-AzAutoscaleRule cmdlet creates an autoscale rule. In this case, you would use it to create a rule that increases the instance count by three when the average CPU usage exceeds 75 percent.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 13,
    "text": "You have an Azure subscription that contains a storage account named storage1. You need to configure storage1 to delete blobs automatically 90 days after they are created. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Create a stored access policy.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Configure a lifecycle management policy.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Configure a retention policy.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Create an access control (IAM) role assignment.",
        "isCorrect": false
      }
    ],
    "explanation": "Lifecycle management policies allow you to automatically move blobs to cooler storage tiers or delete blobs after a specified number of days. For this scenario, you would configure a lifecycle management policy that deletes blobs 90 days after they are created.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 14,
    "text": "You plan to migrate several servers from an on-premises network to Azure. You need to identify any compatibility issues that might prevent a physical server from being migrated. What should you use?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Azure Advisor",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Azure Migrate",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Azure Site Recovery",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Azure Security Center",
        "isCorrect": false
      }
    ],
    "explanation": "Azure Migrate provides server assessment and server migration tools. The server assessment tool helps you assess on-premises servers for migration to Azure. It discovers on-premises servers and provides compatibility assessments, performance-based sizing, and cost estimates for running on-premises servers in Azure.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 15,
    "text": "You deploy an Azure web app named webapp1. You need to add a custom domain name to webapp1. What should you do first?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Add an A record to the domain that points to the IP address of webapp1.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Configure a CNAME record that points to the default URL of webapp1.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Create an App Service domain.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Configure TXT records for domain verification.",
        "isCorrect": false
      }
    ],
    "explanation": "Before you can add a custom domain to a web app, you must configure a CNAME record that points to the default URL of the web app (webapp1.azurewebsites.net). This allows Azure to verify that you own the custom domain.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 16,
    "text": "You have an Azure subscription. You need to implement a policy that will enable centralized management of all the resources that are deployed to the subscription. The solution must meet the following requirements: Apply a tag named CostCenter when any new resource is created. Delete the resources that do not have a CostCenter tag. What should you use?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Azure Cost Management",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Azure Policy",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Azure Resource Manager templates",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Azure Blueprints",
        "isCorrect": false
      }
    ],
    "explanation": "Azure Policy is used to create, assign, and manage policy definitions. Policy definitions enforce different rules and effects over your resources, ensuring that resources remain compliant with corporate standards and service level agreements. In this case, you would create a policy that enforces the tagging of resources and remediate non-compliant resources.",
    "multiSelect": false,
    "section": "Manage Azure identities and governance"
  },
  {
    "id": 17,
    "text": "You have an Azure virtual network named VNet1 that contains a subnet named Subnet1. Subnet1 contains three Azure virtual machines. You need to configure Subnet1 to use an internal load balancer. What should you create first?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "A front-end IP configuration",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "A health probe",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A backend pool",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A load balancing rule",
        "isCorrect": false
      }
    ],
    "explanation": "When creating an internal load balancer, you need to first create a front-end IP configuration that specifies the private IP address in the subnet where the load balancer will be created. After that, you create a backend pool and then configure health probes and load balancing rules.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 18,
    "text": "You have an Azure subscription that contains the resources shown in the following table. You need to ensure that a user named User1 can deploy resources to ResourceGroup1. The solution must use the principle of least privilege. Which role should you assign to User1?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Owner",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Contributor",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Reader",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "User Access Administrator",
        "isCorrect": false
      }
    ],
    "explanation": "The Contributor role allows User1 to manage all resources in ResourceGroup1, including deploying new resources, but does not allow User1 to grant access to others. This fulfills the requirement of the principle of least privilege while still allowing User1 to deploy resources.",
    "multiSelect": false,
    "section": "Manage Azure identities and governance"
  },
  {
    "id": 19,
    "text": "You have an Azure subscription that contains a storage account named storage1. You plan to upload a 2-TB file to storage1. Which storage service should you use?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Azure Files",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Azure Blob Storage",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Azure Table Storage",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Azure Queue Storage",
        "isCorrect": false
      }
    ],
    "explanation": "Azure Blob Storage is designed for storing large amounts of unstructured data, such as text or binary data. It supports single blobs up to 4.77 TB in size, making it suitable for storing a 2-TB file.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 20,
    "text": "You have an Azure subscription that contains a virtual network and a VPN gateway. You need to create a site-to-site VPN to an on-premises network. Which tool should you use?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Azure PowerShell",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Azure Traffic Manager",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Azure Network Watcher",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Azure Security Center",
        "isCorrect": false
      }
    ],
    "explanation": "Azure PowerShell can be used to create and manage all Azure resources, including creating a site-to-site VPN. You would use PowerShell cmdlets like New-AzLocalNetworkGateway and New-AzVirtualNetworkGatewayConnection to set up the VPN connection.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 21,
    "text": "You have an Azure subscription that contains a virtual machine named VM1. You need to create a copy of VM1 in the same resource group. The copy must have a different name but use the same virtual hard disk (VHD). What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Create a snapshot of the OS disk of VM1, and then create a new VM that uses the snapshot.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Create a new VM from the Azure Gallery, and then configure the VM to use the OS disk of VM1.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Create a backup of VM1, and then perform a restore to a new VM.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Create an image of VM1, and then deploy a new VM by using the image.",
        "isCorrect": false
      }
    ],
    "explanation": "To create a copy of a VM that uses the same VHD, you should create a new VM from the Azure Gallery and then configure the VM to use the OS disk of the original VM. This approach ensures that the new VM uses exactly the same VHD as the original VM.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 22,
    "text": "You have an Azure subscription that contains a storage account. You need to create a file share and access it from an Azure virtual machine. Which protocol should you use to connect to the file share?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "iSCSI",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "NFS",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SMB",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "FTPS",
        "isCorrect": false
      }
    ],
    "explanation": "Azure Files supports the Server Message Block (SMB) protocol. SMB is the standard protocol used by Windows-based systems for file sharing. You can mount an Azure file share from Windows, Linux, or macOS using the SMB protocol.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 23,
    "text": "You have an Azure subscription that contains a web app named App1. You configure CORS for App1 as shown in the CORS exhibit. You need to configure CORS to meet the following requirements: Allow requests from the domains that begin with https://contoso. Allow requests from the domain named https://fabrikam.com. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Set Allowed Origins to https://contoso*,https://fabrikam.com",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Set Allowed Origins to https://contoso*, https://fabrikam.com",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Set Allowed Origins to https://contoso* https://fabrikam.com",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Set Allowed Origins to https://contoso*;https://fabrikam.com",
        "isCorrect": true
      }
    ],
    "explanation": "When configuring CORS in the Azure portal, you should separate multiple allowed origins with a semicolon (;). The asterisk (*) can be used as a wildcard for domain prefixes. Therefore, 'https://contoso*;https://fabrikam.com' will allow requests from domains that begin with 'https://contoso' and from the specific domain 'https://fabrikam.com'.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 24,
    "text": "You have an Azure subscription that contains a virtual network named VNet1. You need to deploy 10 Azure virtual machines to VNet1 by using an Azure Resource Manager (ARM) template. The deployment must use the same operating system and sizing. How should you modify the ARM template?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Add a resource loop to the template.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Add a resource with the type Microsoft.Compute/virtualMachines/multiple.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Add a deployment script that runs multiple instances of az vm create.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Create a VM scale set resource.",
        "isCorrect": false
      }
    ],
    "explanation": "To deploy multiple identical resources using an ARM template, you should use a resource loop (copy element). This allows you to create multiple instances of a resource type by iterating through a collection or specifying the number of iterations.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 25,
    "text": "You have an Azure subscription that contains a storage account. You need to configure the storage account to accept connections only from specific subnets on specific virtual networks. What should you use?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "A shared access signature (SAS)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Azure Active Directory (Azure AD) authentication",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A service endpoint policy",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Service endpoints",
        "isCorrect": true
      }
    ],
    "explanation": "Service endpoints allow you to secure Azure service resources to specific virtual networks and subnets. With service endpoints enabled on a subnet, you can restrict network access to the storage account to only allow traffic from that subnet, effectively denying access from all other networks including the internet.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 26,
    "text": "You have an Azure subscription that contains a resource group named RG1. RG1 contains 100 virtual machines. You need to prevent the deletion of the virtual machines in RG1 for a period of three months. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Apply a tag to the virtual machines.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Configure a lock on RG1.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Configure Azure Policy.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Configure Azure Blueprints.",
        "isCorrect": false
      }
    ],
    "explanation": "Azure resource locks prevent resources from being deleted or modified. You can apply a lock at the resource group level, which will prevent the deletion of all resources in that group, including virtual machines. You can set a DeleteLock on RG1 to prevent deletion of the VMs for the required period.",
    "multiSelect": false,
    "section": "Manage Azure identities and governance"
  },
  {
    "id": 27,
    "text": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains a subnet named Subnet1. You have an Azure function app named App1 and a virtual network integration from App1 to Subnet1. You need to ensure that all outbound traffic from App1 is routed through Subnet1. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Configure a route table.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Configure a network security group (NSG).",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Enable WEBSITE_VNET_ROUTE_ALL in the application settings.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Configure a service endpoint.",
        "isCorrect": false
      }
    ],
    "explanation": "When you enable the WEBSITE_VNET_ROUTE_ALL application setting with a value of 1 or true, all outbound traffic from your function app will be routed through the VNet, and network security group rules will be applied.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 28,
    "text": "You have an Azure subscription that contains a virtual machine named VM1. You create an Azure key vault that has a secret named Secret1. You need to encrypt the disks of VM1 by using Secret1. What should you do first?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Configure an access policy for the key vault.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Create a managed identity for VM1.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Install the Azure PowerShell module on VM1.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Create a key vault access policy for VM1.",
        "isCorrect": false
      }
    ],
    "explanation": "Before you can use a key vault secret to encrypt VM disks, you need to configure an access policy for the key vault that allows disk encryption operations. The access policy should grant the Azure Disk Encryption service principal the necessary permissions to access secrets in the key vault.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 29,
    "text": "You have an Azure web app that outputs trace messages during execution. You need to review these trace messages in near-real time. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Configure diagnostic settings for the web app.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Configure Application Insights for the web app.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Use the Kudu console for the web app.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Enable log streaming for the web app.",
        "isCorrect": true
      }
    ],
    "explanation": "Log streaming allows you to view application logs in near-real time. It streams the logs directly to your browser, providing real-time visibility into your application's trace output.",
    "multiSelect": false,
    "section": "Monitor and back up Azure resources"
  },
  {
    "id": 30,
    "text": "You create an Azure Storage account named storage1 and a file share named share1. You need to create a folder structure in share1. Which Azure PowerShell cmdlet should you run?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "New-AzureStorageDirectory",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "New-AzStorageDirectory",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "New-AzDataLakeGen2Item",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "New-AzStorageContainer",
        "isCorrect": false
      }
    ],
    "explanation": "The New-AzStorageDirectory cmdlet creates a directory in an Azure Storage file share. This cmdlet allows you to create a folder structure within a file share by specifying the share name and directory path.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 31,
    "text": "You create a recovery services vault that has a backup policy. You have 100 Azure virtual machines that use managed disks. You need to back up the virtual machines by using the policy. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Configure a scheduled backup.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Create a backup job.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Configure a protected item.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Create a backup policy.",
        "isCorrect": false
      }
    ],
    "explanation": "To back up Azure virtual machines using a recovery services vault's backup policy, you need to configure the VMs as protected items. This associates the VMs with the backup policy, and backups will then occur according to the policy's schedule.",
    "multiSelect": false,
    "section": "Monitor and back up Azure resources"
  },
  {
    "id": 32,
    "text": "You have an Azure subscription that has a Recovery Services vault named Vault1. You use Vault1 to back up multiple Azure SQL databases. One of the databases is accidentally deleted. You need to restore the deleted database to the original server. Which PowerShell cmdlet should you run?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Restore-AzRecoveryServicesBackupItem",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Restore-AzSqlDatabase",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Restore-AzureRmSqlDatabase",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "New-AzSqlDatabaseCopy",
        "isCorrect": false
      }
    ],
    "explanation": "The Restore-AzRecoveryServicesBackupItem cmdlet is used to restore an Azure Backup item from a Recovery Services vault. This cmdlet can be used to restore various backed-up items, including Azure SQL databases that were backed up using the vault.",
    "multiSelect": false,
    "section": "Monitor and back up Azure resources"
  },
  {
    "id": 33,
    "text": "You have an Azure subscription that contains an Azure Storage account named storage1 and a user named User1. You need to enable User1 to view the keys of storage1. The solution must use the principle of least privilege. Which role should you assign to User1?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Storage Account Key Operator Service Role",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Storage Account Contributor",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Reader and Data Access",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Storage Blob Data Contributor",
        "isCorrect": false
      }
    ],
    "explanation": "The Storage Account Key Operator Service Role allows the user to list and regenerate storage account keys. This role provides the least privilege necessary to view the keys of a storage account without granting additional permissions.",
    "multiSelect": false,
    "section": "Manage Azure identities and governance"
  },
  {
    "id": 34,
    "text": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains a subnet named Subnet1. You have a Windows virtual machine named VM1 that has a network interface named NIC1. NIC1 is connected to Subnet1. You need to prevent connections from VM1 to other virtual machines in VNet1. The solution must continue to allow connections from other virtual machines in VNet1 to VM1. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Create a network security group (NSG) that has an outbound security rule that denies traffic to the VirtualNetwork service tag. Apply the NSG to Subnet1.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Configure a connection security rule in Windows Defender Firewall on VM1.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Create a network security group (NSG) that has an outbound security rule that denies traffic to the VirtualNetwork service tag. Apply the NSG to NIC1.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Create a network security group (NSG) that has an inbound security rule that denies traffic from the VirtualNetwork service tag. Apply the NSG to NIC1.",
        "isCorrect": false
      }
    ],
    "explanation": "To prevent VM1 from connecting to other VMs while allowing other VMs to connect to VM1, you need to create an NSG with an outbound security rule that denies traffic to the VirtualNetwork service tag, and then apply it to NIC1. This blocks outbound connections from VM1 to other VMs in the virtual network but doesn't affect inbound connections to VM1.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 35,
    "text": "You have an Azure subscription that contains a web app named WebApp1. You configure TLS mutual authentication for WebApp1. You need to validate client certificates. The certificates are issued by a trusted certificate authority. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Upload the client certificate to WebApp1.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Upload the CA certificate to WebApp1.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Upload the CA certificate to Azure AD.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Add a TXT record to the WebApp1 DNS zone.",
        "isCorrect": false
      }
    ],
    "explanation": "When configuring TLS mutual authentication for a web app, you need to upload the CA certificate to the web app. This allows the web app to verify that client certificates were issued by a trusted CA. The web app will validate client certificates against the uploaded CA certificate.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 36,
    "text": "You have an Azure App Service web app named webapp1. You need to manage files in the web app by using FTP. What should you do first?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Configure the webapp1 deployment credentials.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Create an Azure FTP Storage account.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Create a deployment slot.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Configure the webapp1 application settings.",
        "isCorrect": false
      }
    ],
    "explanation": "To use FTP to manage files in an Azure App Service web app, you first need to configure the deployment credentials. These credentials are used to authenticate FTP connections to the web app. Azure provides two types of credentials: user-level credentials (apply to all apps) and app-level credentials (specific to each app).",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 37,
    "text": "You have an Azure subscription that contains a virtual network named VNET1. VNET1 contains a subnet named Subnet1. Subnet1 contains three Azure virtual machines. You need to apply a network security group (NSG) named NSG1 to Subnet1. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Create a new NSG and associate it with Subnet1.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Create NSG1 and configure an application security group.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Create NSG1 and associate it with Subnet1.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Create NSG1 and associate it with each virtual machine in Subnet1.",
        "isCorrect": false
      }
    ],
    "explanation": "To apply an NSG to a subnet, you need to create the NSG and then associate it with the subnet. This will apply the NSG rules to all resources within the subnet, including the three virtual machines, without needing to associate the NSG with each individual VM.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 38,
    "text": "You have an Azure subscription that contains the resources shown in the following table. Network interface NIC1 belongs to VM1. You need to apply NSG1 to VM1. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Associate NSG1 to Subnet1.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Associate NSG1 to VNET1.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Configure an application security group.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Associate NSG1 to NIC1.",
        "isCorrect": true
      }
    ],
    "explanation": "To apply an NSG specifically to a single VM, you should associate the NSG with the VM's network interface (NIC). This applies the NSG rules only to that VM, without affecting other VMs in the same subnet.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 39,
    "text": "You have an Azure subscription that contains a virtual network. The virtual network contains the subnets shown in the following table. You create an Azure Cache for Redis instance named Cache1. To which subnet can you deploy Cache1?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Subnet1",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Subnet2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Subnet3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Subnet4",
        "isCorrect": false
      }
    ],
    "explanation": "Azure Cache for Redis requires a subnet with enough IP addresses for all cache instances (both the primary and replica nodes). The subnet must not contain any other resources and must have a minimum size of /27. In this case, Subnet1 has the appropriate address space (/27) and doesn't contain any other resources.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 40,
    "text": "You have an Azure subscription that contains a resource group named RG1. RG1 contains an Azure virtual machine named VM1 that is protected by Azure Backup. You need to review the Azure Backup Infrastructure used to protect VM1. What should you use?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Azure Security Center",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Azure Monitor",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Recovery Services vault",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Azure Site Recovery",
        "isCorrect": false
      }
    ],
    "explanation": "The Recovery Services vault is used to store backup data for various Azure services including Azure VMs. To review the Azure Backup infrastructure used to protect a VM, you would access the Recovery Services vault that contains the VM's backup data.",
    "multiSelect": false,
    "section": "Monitor and back up Azure resources"
  },
  {
    "id": 41,
    "text": "You are configuring a custom domain name for an Azure web app named webapp1. You add a DNS CNAME record for www.contoso.com that points to webapp1.azurewebsites.net. You need to verify the domain. What should you create?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "A DNS SRV record",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A DNS A record",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A DNS TXT record",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "A DNS MX record",
        "isCorrect": false
      }
    ],
    "explanation": "To verify a custom domain for an Azure web app, you create a DNS TXT record with the value provided by Azure. This verifies that you own the domain and have permission to use it with your web app.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 42,
    "text": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains a subnet named Subnet1. You create a private endpoint connection to several Azure services on Subnet1. You need to ensure that the host names of the Azure services are resolved to the IP addresses of the associated private endpoints. What should you create?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "A private DNS zone integration",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "A DNS A record",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A DNS forwarding rule",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "An alias record",
        "isCorrect": false
      }
    ],
    "explanation": "When you create a private endpoint, Azure can create or use an existing private DNS zone integration for the service. This allows the service's hostname to be resolved to the private IP address of the endpoint from within the virtual network, ensuring traffic to the service stays on the Microsoft network rather than going over the internet.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 43,
    "text": "You have an Azure subscription that contains a virtual machine named VM1. VM1 is in a virtual network named VNet1. You need to ensure that all outgoing connections from VM1 are routed through an Azure Firewall. What should you create?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "A network security group (NSG)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A route table",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A virtual network peering",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A service endpoint",
        "isCorrect": false
      }
    ],
    "explanation": "To ensure that all outgoing connections from VM1 are routed through an Azure Firewall, you need to create a route table with a user-defined route that sends all outbound traffic (0.0.0.0/0) to the Azure Firewall as the next hop. Then associate this route table with the subnet that contains VM1.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 44,
    "text": "You have an Azure subscription that contains the resources shown in the following table. You need to implement a disaster recovery solution for VM1. The solution must meet the following requirements: Use Azure Site Recovery. Ensure that VM1 can fail over automatically to VM2. Ensure that VM1 can fail over automatically to VMReplica. Which type of recovery plan should you create?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "A recovery plan that has one group that contains VM1, VM2, and VMReplica",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A recovery plan that has three groups that each contains one of the virtual machines",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A recovery plan that has two groups, one that contains VM1 and VMReplica and another that contains VM2",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A recovery plan that has two groups, one that contains VM1 and another that contains VM2 and VMReplica",
        "isCorrect": true
      }
    ],
    "explanation": "To implement the described disaster recovery solution, you need a recovery plan with two groups: one that contains VM1 (the primary VM) and another that contains both VM2 and VMReplica (the recovery VMs). This allows VM1 to fail over automatically to either VM2 or VMReplica in the event of a disaster.",
    "multiSelect": false,
    "section": "Monitor and back up Azure resources"
  },
  {
    "id": 45,
    "text": "You have an Azure subscription that contains a resource group named RG1. RG1 contains 50 Azure virtual machines. You need to identify which virtual machines run Windows Server. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Run Get-AzVM -ResourceGroupName RG1 | Where-Object {$_.StorageProfile.ImageReference.Offer -eq 'WindowsServer'}",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Run Get-AzVirtualMachine -ResourceGroupName RG1 | Where-Object {$_.OSProfile.WindowsConfiguration -ne $null}",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "From the Azure portal, create a new query in Azure Monitor, and then filter the results.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "From the Azure portal, export the RG1 resource list to a CSV file, and then open the file in Microsoft Excel.",
        "isCorrect": false
      }
    ],
    "explanation": "The PowerShell command `Get-AzVM -ResourceGroupName RG1 | Where-Object {$_.StorageProfile.ImageReference.Offer -eq 'WindowsServer'}` retrieves all VMs in the resource group RG1 and filters them to show only those that use a WindowsServer image, effectively identifying all VMs running Windows Server.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 46,
    "text": "You have an Azure subscription that contains virtual machines that run Windows Server 2019. You need to encrypt the operating system disks by using Azure Disk Encryption. Which key vault service tier is required?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Either Standard or Premium",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Premium only",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Standard only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Azure Disk Encryption does not require a key vault.",
        "isCorrect": false
      }
    ],
    "explanation": "Azure Disk Encryption can use either a Standard or Premium key vault. Both service tiers support the key management features required for disk encryption. The choice between Standard and Premium depends on your performance and SLA requirements.",
    "multiSelect": false,
    "section": "Deploy and manage Azure compute resources"
  },
  {
    "id": 47,
    "text": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 has three subnets named Subnet1, Subnet2, and Subnet3. You plan to deploy several Azure virtual machines to each subnet. You need to ensure that the virtual machines in Subnet1 cannot communicate with the virtual machines in Subnet2 and Subnet3. What should you do?",
    "instruction": "Select the best answer.",
    "options": [
      {
        "id": "A",
        "text": "Create a user-defined route for Subnet1.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Create a network security group (NSG) for Subnet1.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Configure a service endpoint for Subnet1.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Configure DDoS protection for VNet1.",
        "isCorrect": false
      }
    ],
    "explanation": "To block communication between subnets in a virtual network, you should create a network security group (NSG) with rules that deny traffic between the subnets. You would create an NSG for Subnet1 with an outbound rule that denies traffic to the IP address ranges of Subnet2 and Subnet3.",
    "multiSelect": false,
    "section": "Implement and manage virtual networking"
  },
  {
    "id": 48,
    "text": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains a subnet named Subnet1. You need to ensure that only resources in Subnet1 can access a storage account named storage1. What should you configure?",
    "instruction": "Select the correct answer.",
    "options": [
      { "id": "A", "text": "A shared access signature (SAS).", "isCorrect": false },
      { "id": "B", "text": "A service endpoint on Subnet1 and network rules on storage1.", "isCorrect": true },
      { "id": "C", "text": "A private endpoint.", "isCorrect": false },
      { "id": "D", "text": "A service endpoint policy.", "isCorrect": false }
    ],
    "explanation": "To ensure only resources in a specific subnet can access a storage account, you should configure a service endpoint on the subnet and network rules on the storage account. This restricts access to the storage account to only resources in the specified subnet.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 49,
    "text": "You have an Azure subscription that contains a storage account named storage1. Storage1 contains a file share named share1. You need to mount share1 on a computer that runs Windows 10. Which protocol should you use?",
    "instruction": "Select the correct answer.",
    "options": [
      { "id": "A", "text": "REST", "isCorrect": false },
      { "id": "B", "text": "SMB", "isCorrect": true },
      { "id": "C", "text": "NFS", "isCorrect": false },
      { "id": "D", "text": "iSCSI", "isCorrect": false }
    ],
    "explanation": "To mount an Azure file share on a computer that runs Windows 10, you should use the SMB (Server Message Block) protocol. Azure Files supports the SMB protocol, which is natively supported by Windows, allowing you to mount the file share as a network drive.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  },
  {
    "id": 50,
    "text": "You have an Azure subscription that contains a resource group named RG1. RG1 contains a web app named WebApp1 and a storage account named storage1. You need to configure WebApp1 to securely access storage1 without using access keys. What should you configure?",
    "instruction": "Select the correct answer.",
    "options": [
      { "id": "A", "text": "A shared access signature (SAS).", "isCorrect": false },
      { "id": "B", "text": "A managed identity for WebApp1 and role-based access control for storage1.", "isCorrect": true },
      { "id": "C", "text": "A service endpoint on the web app subnet.", "isCorrect": false },
      { "id": "D", "text": "Application settings in WebApp1.", "isCorrect": false }
    ],
    "explanation": "To allow a web app to securely access a storage account without using access keys, you should configure a managed identity for the web app and role-based access control for the storage account. This allows the web app to authenticate to Azure resources using Azure AD without storing credentials in the code.",
    "multiSelect": false,
    "section": "Implement and manage storage"
  }
];

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    let arrayCopy = [...array]; // Create a copy to avoid modifying the original
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
}

// Randomize questions and options on initialization
function prepareRandomizedQuestions() {
    // Create deep copy of the original questions with shuffled options
    const randomizedQuestions = questionsOriginal.map(q => {
        // Create a new question object with shuffled options
        const newQuestion = {...q};
        
        // Create a copy of options and shuffle them
        newQuestion.options = shuffleArray([...q.options]);
        
        // Reassign option IDs (A, B, C, D) to maintain the pattern
        newQuestion.options = newQuestion.options.map((opt, index) => {
            return {
                ...opt,
                id: String.fromCharCode(65 + index) // 65 is ASCII for 'A'
            };
        });
        
        return newQuestion;
    });
    
    // Shuffle the questions themselves
    return shuffleArray(randomizedQuestions);
}

// Initialize questions by randomizing them
let questions = prepareRandomizedQuestions();

// Initialize variables
let currentQuestionIndex = 0;
let userAnswers = {};
let questionsEvaluated = {};
let correctQuestions = 0;
let autoEvaluate = true; // New flag to control automatic evaluation
let sectionScores = {}; // Track scores by section

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(currentQuestionIndex);
    updateNavigationButtons();
    updateScoreDisplay();
    initializeSectionScores();
    
    // Event listeners for navigation buttons
    document.getElementById('next-btn').addEventListener('click', () => {
        // Auto-evaluate the current question if it hasn't been evaluated yet
        if (autoEvaluate && !questionsEvaluated[questions[currentQuestionIndex].id]) {
            evaluateQuestionSilently(currentQuestionIndex);
        }
        nextQuestion();
    });
    
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('check-btn').addEventListener('click', checkAnswer);
    
    // Update total questions count
    document.getElementById('total-questions').textContent = questions.length;
    
    // Add a toggle for auto-evaluation
    const scoreTracker = document.getElementById('score-tracker');
    if (scoreTracker) {
        const autoEvalToggle = document.createElement('div');
        autoEvalToggle.className = 'auto-eval-toggle';
        autoEvalToggle.innerHTML = `
            <label for="auto-eval-checkbox">Auto-evaluate answers:</label>
            <input type="checkbox" id="auto-eval-checkbox" checked>
        `;
        scoreTracker.parentNode.insertBefore(autoEvalToggle, scoreTracker);
        
        // Add event listener for the checkbox
        document.getElementById('auto-eval-checkbox').addEventListener('change', (e) => {
            autoEvaluate = e.target.checked;
        });
    }
});

// Initialize section scores tracking
function initializeSectionScores() {
    // Get all unique sections
    const sections = [];
    questions.forEach(q => {
        if (q.section && !sections.includes(q.section)) {
            sections.push(q.section);
        }
    });
    
    // Initialize scores for each section
    sections.forEach(section => {
        sectionScores[section] = {
            total: questions.filter(q => q.section === section).length,
            correct: 0
        };
    });
}

// Display current question
function displayQuestion(index) {
    const question = questions[index];
    const container = document.getElementById('question-container');
    const isMultiSelect = question.multiSelect;
    
    // Update the current question number display
    document.getElementById('current-question').textContent = index + 1;
    
    let html = `
        <div class="question">
            <h2>Question ${index + 1} of ${questions.length}</h2>
            <div class="question-text">
                <p>${question.text}</p>
                <p><strong>${question.instruction}</strong></p>
            </div>
            <div class="options">
    `;
    
    // Generate options HTML
    question.options.forEach(option => {
        const checked = userAnswers[question.id] && userAnswers[question.id].includes(option.id) ? 'checked' : '';
        const inputType = isMultiSelect ? 'checkbox' : 'radio';
        
        html += `
            <div class="option">
                <input type="${inputType}" id="option-${option.id}" name="question-${question.id}" value="${option.id}" ${checked}>
                <label for="option-${option.id}">${option.text}</label>
                <div id="feedback-${option.id}" class="feedback"></div>
            </div>
        `;
    });
    
    html += `
            </div>
            <div class="explanation" id="explanation-${question.id}" style="display: none;">
                <p>${question.explanation}</p>
    `;
    
    html += `
            </div>
        </div>
    `;
    
    // Show results if this is beyond the last question
    if (index === questions.length - 1 && Object.keys(questionsEvaluated).length === questions.length) {
        html += `
            <div id="results-container" class="results">
                <h2>Exam Results</h2>
                <p>You answered ${correctQuestions} out of ${questions.length} questions correctly.</p>
                <p>Overall Score: ${Math.round((correctQuestions / questions.length) * 100)}%</p>
                
                <h3>Section Scores:</h3>
                <ul class="section-scores">
                    ${generateSectionScoresHTML()}
                </ul>
                
                <button id="retake-btn">Retake Exam</button>
            </div>
        `;
    }
    
    container.innerHTML = html;
    
    // Add event listeners to inputs
    question.options.forEach(option => {
        const inputElement = document.getElementById(`option-${option.id}`);
        if (inputElement) {
            inputElement.addEventListener('change', () => {
                if (isMultiSelect) {
                    // For checkboxes (multi-select)
                    if (!userAnswers[question.id]) {
                        userAnswers[question.id] = [];
                    }
                    
                    if (inputElement.checked) {
                        if (!userAnswers[question.id].includes(option.id)) {
                            userAnswers[question.id].push(option.id);
                        }
                    } else {
                        userAnswers[question.id] = userAnswers[question.id].filter(id => id !== option.id);
                    }
                } else {
                    // For radio buttons (single-select)
                    userAnswers[question.id] = [option.id];
                }
                
                // If we already evaluated this question, clear the evaluation
                if (questionsEvaluated[question.id]) {
                    const wasCorrect = isQuestionCorrect(question);
                    // If this was a correct question, decrement the counts
                    if (wasCorrect) {
                        correctQuestions--;
                        
                        // Decrement section score if applicable
                        if (question.section && sectionScores[question.section]) {
                            sectionScores[question.section].correct--;
                        }
                    }
                    delete questionsEvaluated[question.id];
                    
                    // Clear any feedback
                    question.options.forEach(opt => {
                        const feedbackEl = document.getElementById(`feedback-${opt.id}`);
                        if (feedbackEl) {
                            feedbackEl.textContent = '';
                            feedbackEl.className = 'feedback';
                        }
                    });
                    
                    // Hide explanation
                    const explanationEl = document.getElementById(`explanation-${question.id}`);
                    if (explanationEl) {
                        explanationEl.style.display = 'none';
                    }
                    
                    // Update score display
                    updateScoreDisplay();
                }
            });
        }
    });
    
    // Add event listener to retake button if it exists
    const retakeButton = document.getElementById('retake-btn');
    if (retakeButton) {
        retakeButton.addEventListener('click', resetExam);
    }
    
    // Restore feedbacks if question was already evaluated
    if (questionsEvaluated[question.id]) {
        restoreFeedback(question);
    }
    
    // Update progress bar
    const progressPercentage = ((index + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
}

// Generate HTML for section scores
function generateSectionScoresHTML() {
    let html = '';
    
    Object.entries(sectionScores).forEach(([section, score]) => {
        const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
        html += `
            <li>
                <strong>${section}:</strong> ${score.correct}/${score.total} (${percentage}%)
            </li>
        `;
    });
    
    return html;
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++;
        
        // If we've gone beyond the last question, show the results
        if (currentQuestionIndex === questions.length) {
            // Auto-evaluate all remaining questions
            if (autoEvaluate) {
                questions.forEach((q, i) => {
                    if (!questionsEvaluated[q.id] && userAnswers[q.id] && userAnswers[q.id].length > 0) {
                        evaluateQuestionSilently(i);
                    }
                });
            }
            showResults();
        } else {
            displayQuestion(currentQuestionIndex);
        }
        
        updateNavigationButtons();
    }
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
        updateNavigationButtons();
    }
}

// Update navigation button states
function updateNavigationButtons() {
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    
    // Update next button text if we're on the last question
    const nextBtn = document.getElementById('next-btn');
    if (currentQuestionIndex === questions.length - 1) {
        // If all questions evaluated or answered, "Finish" otherwise just "Next"
        const allAnswered = questions.every(q => userAnswers[q.id] && userAnswers[q.id].length > 0);
        nextBtn.textContent = allAnswered ? "Finish" : "Next";
    } else {
        nextBtn.textContent = "Next";
    }
    
    // Disable next button if we're beyond the questions
    nextBtn.disabled = currentQuestionIndex >= questions.length;
}

// Check current question answer visibly (with feedback)
function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionId = currentQuestion.id;
    
    // If no answer selected, alert user
    if (!userAnswers[questionId] || userAnswers[questionId].length === 0) {
        alert('Please select an answer before checking.');
        return;
    }
    
    // Show explanation
    document.getElementById(`explanation-${questionId}`).style.display = 'block';
    
    // Check if this is the first time evaluating this question
    if (!questionsEvaluated[questionId]) {
        evaluateAnswer(currentQuestion);
    } else {
        // Just restore the feedback visually
        restoreFeedback(currentQuestion);
    }
    
    // Update navigation (in case this was the last question to be evaluated)
    updateNavigationButtons();
}

// New function to evaluate a question without showing feedback
function evaluateQuestionSilently(questionIndex) {
    const question = questions[questionIndex];
    const questionId = question.id;
    
    // If no answer selected for this question, skip evaluation
    if (!userAnswers[questionId] || userAnswers[questionId].length === 0) {
        return;
    }
    
    // If already evaluated, skip
    if (questionsEvaluated[questionId]) {
        return;
    }
    
    // Get all correct option IDs for this question
    const correctOptionIds = question.options
        .filter(option => option.isCorrect)
        .map(option => option.id);
    
    const userSelectedIds = userAnswers[questionId] || [];
    
    // Check if the answer is fully correct
    let isFullyCorrect = true;
    
    // For the answer to be fully correct:
    // 1. All selected options must be correct
    // 2. All correct options must be selected
    
    // Check if all selected options are correct
    for (const selectedId of userSelectedIds) {
        if (!correctOptionIds.includes(selectedId)) {
            isFullyCorrect = false;
            break;
        }
    }
    
    // Check if all correct options were selected
    if (isFullyCorrect && userSelectedIds.length !== correctOptionIds.length) {
        isFullyCorrect = false;
    }
    
    // Mark this question as evaluated
    questionsEvaluated[questionId] = true;
    
    // Update the score if correct
    if (isFullyCorrect) {
        correctQuestions++;
        
        // Update section score if applicable
        if (question.section && sectionScores[question.section]) {
            sectionScores[question.section].correct++;
        }
        
        updateScoreDisplay();
    }
}

// Check if a question is currently correct (used when changing answers)
function isQuestionCorrect(question) {
    const questionId = question.id;
    const userSelectedIds = userAnswers[questionId] || [];
    
    // Get all correct option IDs for this question
    const correctOptionIds = question.options
        .filter(option => option.isCorrect)
        .map(option => option.id);
    
    // Check if the answer is fully correct
    let isFullyCorrect = true;
    
    // For the answer to be fully correct:
    // 1. All selected options must be correct
    // 2. All correct options must be selected
    
    // Check if all selected options are correct
    for (const selectedId of userSelectedIds) {
        if (!correctOptionIds.includes(selectedId)) {
            isFullyCorrect = false;
            break;
        }
    }
    
    // Check if all correct options were selected
    if (isFullyCorrect && userSelectedIds.length !== correctOptionIds.length) {
        isFullyCorrect = false;
    }
    
    return isFullyCorrect;
}

// Update the score display
function updateScoreDisplay() {
    const scoreElement = document.getElementById('score-tracker');
    if (scoreElement) {
        scoreElement.style.display = 'block';
        document.getElementById('correct-count').textContent = correctQuestions;
        document.getElementById('total-count').textContent = questions.length;
        document.getElementById('score-percentage').textContent = 
            Math.round((correctQuestions / questions.length) * 100);
    }
}

// Evaluate answer and update score with visible feedback
function evaluateAnswer(question) {
    const questionId = question.id;
    const userSelectedIds = userAnswers[questionId] || [];
    
    // Get all correct option IDs for this question
    const correctOptionIds = question.options
        .filter(option => option.isCorrect)
        .map(option => option.id);
    
    // Check if the answer is fully correct
    let isFullyCorrect = true;
    
    // For the answer to be fully correct:
    // 1. All selected options must be correct
    // 2. All correct options must be selected
    
    // Check if all selected options are correct
    for (const selectedId of userSelectedIds) {
        if (!correctOptionIds.includes(selectedId)) {
            isFullyCorrect = false;
            break;
        }
    }
    
    // Check if all correct options were selected
    if (isFullyCorrect && userSelectedIds.length !== correctOptionIds.length) {
        isFullyCorrect = false;
    }
    
    // Mark this question as evaluated
    questionsEvaluated[questionId] = true;
    
    // Update the score if correct
    if (isFullyCorrect) {
        correctQuestions++;
        
        // Update section score if applicable
        if (question.section && sectionScores[question.section]) {
            sectionScores[question.section].correct++;
        }
        
        updateScoreDisplay();
    }
    
    // Provide feedback for each option
    question.options.forEach(option => {
        const feedbackElement = document.getElementById(`feedback-${option.id}`);
        const isSelected = userSelectedIds.includes(option.id);
        
        if (isSelected && option.isCorrect) {
            feedbackElement.textContent = '✓ This answer is correct.';
            feedbackElement.className = 'feedback correct';
        } else if (isSelected && !option.isCorrect) {
            feedbackElement.textContent = '× This answer is incorrect.';
            feedbackElement.className = 'feedback incorrect';
        } else if (!isSelected && option.isCorrect) {
            feedbackElement.textContent = '✓ This is a correct answer you missed.';
            feedbackElement.className = 'feedback missed';
        }
    });
}

// Restore feedback for a previously evaluated question
function restoreFeedback(question) {
    const questionId = question.id;
    const userSelectedIds = userAnswers[questionId] || [];
    
    document.getElementById(`explanation-${questionId}`).style.display = 'block';
    
    question.options.forEach(option => {
        const feedbackElement = document.getElementById(`feedback-${option.id}`);
        const isSelected = userSelectedIds.includes(option.id);
        
        if (isSelected && option.isCorrect) {
            feedbackElement.textContent = '✓ This answer is correct.';
            feedbackElement.className = 'feedback correct';
        } else if (isSelected && !option.isCorrect) {
            feedbackElement.textContent = '× This answer is incorrect.';
            feedbackElement.className = 'feedback incorrect';
        } else if (!isSelected && option.isCorrect) {
            feedbackElement.textContent = '✓ This is a correct answer you missed.';
            feedbackElement.className = 'feedback missed';
        }
    });
}

// Show final results
function showResults() {
    const container = document.getElementById('question-container');
    
    // Calculate final score
    const scorePercentage = Math.round((correctQuestions / questions.length) * 100);
    
    let html = `
        <div class="results">
            <h2>Exam Results</h2>
            <p>You answered ${correctQuestions} out of ${questions.length} questions correctly.</p>
            <p>Overall Score: ${scorePercentage}%</p>
            
            <h3>Section Scores:</h3>
            <ul class="section-scores">
                ${generateSectionScoresHTML()}
            </ul>
            
            <button id="retake-btn">Retake Exam</button>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Add event listener to retake button
    document.getElementById('retake-btn').addEventListener('click', resetExam);
}

// Reset the exam to start over
function resetExam() {
    // Reset all variables
    currentQuestionIndex = 0;
    userAnswers = {};
    questionsEvaluated = {};
    correctQuestions = 0;
    
    // Randomize questions and options again
    questions = prepareRandomizedQuestions();
    
    // Reinitialize section scores
    initializeSectionScores();
    
    // Reset score tracker display
    updateScoreDisplay();
    
    // Display the first question
    displayQuestion(currentQuestionIndex);
    updateNavigationButtons();
}

// Add some CSS for the section tag
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .section-tag {
            display: inline-block;
            background-color: #e0f2fe;
            color: #0c4a6e;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 14px;
            margin-bottom: 12px;
        }
        
        .section-scores {
            margin-top: 10px;
            padding-left: 20px;
        }
        
        .section-scores li {
            margin-bottom: 8px;
        }
    `;
    document.head.appendChild(style);
});
