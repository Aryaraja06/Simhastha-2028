import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Bus, MapPin, Clock, Users, Battery, Wifi, Navigation, AlertCircle, CheckCircle, RefreshCw } from "lucide-react"

export default function PublicTransport() {
  const buses = [
    {
      id: "BUS-001",
      route: "Station → Triveni Sangam",
      capacity: 50,
      occupied: 42,
      location: "Near Ghat 3",
      eta: "5 min",
      status: "Active",
      accessibility: true,
      gps: "Online",
    },
    {
      id: "BUS-002",
      route: "Airport → VIP Area",
      capacity: 30,
      occupied: 8,
      location: "Highway Junction",
      eta: "12 min",
      status: "Active",
      accessibility: true,
      gps: "Online",
    },
    {
      id: "BUS-003",
      route: "Parking → Dashashwamedh",
      capacity: 45,
      occupied: 45,
      location: "Ghat Entrance",
      eta: "2 min",
      status: "Full",
      accessibility: false,
      gps: "Online",
    },
    {
      id: "SHUTTLE-001",
      route: "Inter-Ghat Shuttle",
      capacity: 25,
      occupied: 15,
      location: "Manikarnika",
      eta: "8 min",
      status: "Active",
      accessibility: true,
      gps: "Online",
    },
  ]

  const shuttleServices = [
    { name: "Express Ghat Shuttle", frequency: "Every 5 min", coverage: "All Major Ghats" },
    { name: "Accessibility Shuttle", frequency: "Every 10 min", coverage: "Barrier-Free Routes" },
    { name: "VIP Transport", frequency: "On Demand", coverage: "Dedicated Routes" },
    { name: "Emergency Shuttle", frequency: "24/7 Standby", coverage: "Hospital & Emergency" },
  ]

  return (
    <div className="space-y-6">
      {/* Fleet Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Fleet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <p className="text-xs text-green-600">98% Operational</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <p className="text-xs text-blue-600">All Systems Online</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Passengers/Hour</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">45,200</div>
            <p className="text-xs text-purple-600">Peak Capacity</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Accessibility Fleet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">156</div>
            <p className="text-xs text-orange-600">Specially Equipped</p>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Bus Tracking */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bus className="h-5 w-5 text-blue-600" />
            Real-time Fleet Tracking
          </CardTitle>
          <CardDescription>Live monitoring of all public transport vehicles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {buses.map((bus, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{bus.id}</h3>
                    <p className="text-sm text-gray-600">{bus.route}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant={
                        bus.status === "Active" ? "default" : bus.status === "Full" ? "destructive" : "secondary"
                      }
                    >
                      {bus.status}
                    </Badge>
                    {bus.accessibility && (
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        Accessible
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{bus.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">ETA: {bus.eta}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">
                      {bus.occupied}/{bus.capacity}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{bus.gps}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Occupancy</span>
                    <span>{Math.round((bus.occupied / bus.capacity) * 100)}%</span>
                  </div>
                  <Progress value={(bus.occupied / bus.capacity) * 100} className="h-2" />
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Navigation className="h-3 w-3 mr-1" />
                    Track
                  </Button>
                  <Button size="sm" variant="outline">
                    <RefreshCw className="h-3 w-3 mr-1" />
                    Reroute
                  </Button>
                  <Button size="sm" variant="outline">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Alert
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Shuttle Services */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-purple-600" />
            Specialized Shuttle Services
          </CardTitle>
          <CardDescription>Dedicated shuttle services for different needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shuttleServices.map((service, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{service.name}</h4>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Frequency: {service.frequency}</p>
                  <p>Coverage: {service.coverage}</p>
                </div>
                <Button size="sm" className="w-full mt-3">
                  Manage Service
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fleet Management Controls */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Fleet Management Controls</CardTitle>
          <CardDescription>Quick actions for fleet coordination</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Bus className="h-5 w-5" />
              Deploy Additional
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <AlertCircle className="h-5 w-5" />
              Emergency Mode
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <RefreshCw className="h-5 w-5" />
              Route Optimization
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Battery className="h-5 w-5" />
              Maintenance Alert
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
