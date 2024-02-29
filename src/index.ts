import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, firstName: string , lastName: string, password: string ) {
  const res = await prisma.user.create({
    data: {
        email:email,
        firstName:firstName,
        lastName:lastName,
        password:password,
    },
    
  })
  console.log(res);
}

async function updateInfo(email:string,firstName:string,lastName:string) {
    const res=await prisma.user.update({
        where: {email},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res);
}

async function getUserDetails() {
    const res=await prisma.user.findMany({
        // where:{email},
        select: {
            id: true,
            email: true,
            firstName:true,
            lastName:true
            // Add other necessary fields, but exclude 'password'
        },
    })

    console.log(res);
}

async function deleteUser(email:string) {
    const res=await prisma.user.delete({
        where:{email},
    })

    console.log(res);
}


// insertUser("prakhar09@gmail.com", "prakhar", "sinha","123456")
// updateInfo("prakhar@gmail.com","prakharr","sinhaa")
getUserDetails()
// deleteUser("prakhar@gmail.com")
