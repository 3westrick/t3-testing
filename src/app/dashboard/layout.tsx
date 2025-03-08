export default function layout(
    {
        children, 
        notifications, 
        users, 
        revenue,
    }:{
        children: React.ReactNode, 
        notifications: React.ReactNode, 
        users: React.ReactNode, 
        revenue: React.ReactNode,
    }){
    return (
        <div>
            <div className="flex w-full items-center justify-between p-4 pb-8 text-xl font-semibold border-b">
                Dashboard
            </div>
            <div>
                <div>
                    {children}
                </div>
                <div className="grid p-0 md:grid-cols-2 ">
                    <div className="border-r border-b p-4">{users}</div>
                    <div className="p-4 border-b">{revenue}</div>
                </div>
                <div className="p-4">
                    {notifications}
                </div>
            </div>
        </div>
    )
}