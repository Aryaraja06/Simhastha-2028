import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Users, MapPin, Bus, AlertTriangle, Activity, TrendingUp, CheckCircle } from "lucide-react"

export default function DashboardOverview() {
  const stats = [
    { title: "Active Pilgrims", value: "2.4M", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Ghat Locations", value: "84", change: "Active", icon: MapPin, color: "text-green-600" },
    { title: "Transport Fleet", value: "1,247", change: "98% Active", icon: Bus, color: "text-purple-600" },
    { title: "System Alerts", value: "3", change: "Low Priority", icon: AlertTriangle, color: "text-orange-600" },
  ]

  const ghats = [
    { name: "Triveni Sangam", capacity: 50000, current: 42000, status: "High" },
    { name: "Dashashwamedh", capacity: 30000, current: 18000, status: "Medium" },
    { name: "Manikarnika", capacity: 25000, current: 8000, status: "Low" },
    { name: "Assi Ghat", capacity: 20000, current: 15000, status: "Medium" },
  ]

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real-time Ghat Status */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-orange-600" />
              Ghat Occupancy Status
            </CardTitle>
            <CardDescription>Real-time crowd density at major ghats</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {ghats.map((ghat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{ghat.name}</span>
                  <Badge
                    variant={
                      ghat.status === "High" ? "destructive" : ghat.status === "Medium" ? "default" : "secondary"
                    }
                  >
                    {ghat.status}
                  </Badge>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>
                    {ghat.current.toLocaleString()} / {ghat.capacity.toLocaleString()}
                  </span>
                  <span>{Math.round((ghat.current / ghat.capacity) * 100)}%</span>
                </div>
                <Progress value={(ghat.current / ghat.capacity) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Health */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-600" />
              System Health Monitor
            </CardTitle>
            <CardDescription>Real-time system performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Route Optimization Engine</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Dynamic Signage Network</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Public Transport Tracking</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Accessibility Services</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">VIP Movement Coordination</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Overall System Performance</span>
                <span className="text-sm text-green-600 font-semibold">98.7%</span>
              </div>
              <Progress value={98.7} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Emergency controls and system management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <AlertTriangle className="h-5 w-5" />
              Emergency Alert
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Bus className="h-5 w-5" />
              Deploy Shuttles
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <MapPin className="h-5 w-5" />
              Route Diversion
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <TrendingUp className="h-5 w-5" />
              Generate Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
