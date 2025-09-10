import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car, Shield, Clock, Route, Phone, AlertTriangle, Navigation, Star } from "lucide-react"

export default function VIPMovement() {
  const vipMovements = [
    {
      id: "VIP-001",
      dignitary: "Chief Minister",
      from: "Airport",
      to: "VIP Ghat",
      departure: "14:30",
      arrival: "15:15",
      status: "En Route",
      security: "Z+ Category",
      vehicles: 12,
      route: "Secured Route A",
    },
    {
      id: "VIP-002",
      dignitary: "Governor",
      from: "Raj Bhavan",
      to: "Triveni Sangam",
      departure: "16:00",
      arrival: "16:45",
      status: "Scheduled",
      security: "Z Category",
      vehicles: 8,
      route: "Secured Route B",
    },
    {
      id: "VIP-003",
      dignitary: "Union Minister",
      from: "Hotel",
      to: "Main Ghat",
      departure: "18:30",
      arrival: "19:00",
      status: "Preparing",
      security: "Y+ Category",
      vehicles: 6,
      route: "Secured Route C",
    },
  ]

  const securityZones = [
    { zone: "Red Zone", status: "Secured", personnel: 150, coverage: "VIP Ghats" },
    { zone: "Yellow Zone", status: "Monitoring", personnel: 200, coverage: "Approach Routes" },
    { zone: "Green Zone", status: "Normal", personnel: 100, coverage: "Outer Perimeter" },
    { zone: "Blue Zone", status: "Standby", personnel: 75, coverage: "Emergency Routes" },
  ]

  const automationFeatures = [
    { feature: "Route Clearance", status: "Automated", description: "Pre-clears routes 30 min before arrival" },
    { feature: "Traffic Signal Override", status: "Active", description: "Automatic green corridor creation" },
    { feature: "Crowd Management", status: "AI-Powered", description: "Predictive crowd dispersal" },
    { feature: "Security Coordination", status: "Real-time", description: "Multi-agency coordination" },
  ]

  return (
    <div className="space-y-6">
      {/* VIP Movement Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active VIP Movements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3</div>
            <p className="text-xs text-green-600">All Secured</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Security Personnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">525</div>
            <p className="text-xs text-blue-600">On Duty</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Secured Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">8</div>
            <p className="text-xs text-purple-600">Ready</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Vehicle Fleet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">26</div>
            <p className="text-xs text-orange-600">Deployed</p>
          </CardContent>
        </Card>
      </div>

      {/* VIP Movement Scheduling */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-blue-600" />
            VIP Movement Automation
          </CardTitle>
          <CardDescription>Automated coordination and scheduling of VIP movements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Dignitary Name</label>
                <Input placeholder="Enter dignitary name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">From Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select origin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airport">Airport</SelectItem>
                      <SelectItem value="rajbhavan">Raj Bhavan</SelectItem>
                      <SelectItem value="hotel">Hotel</SelectItem>
                      <SelectItem value="station">Railway Station</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">To Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vipghat">VIP Ghat</SelectItem>
                      <SelectItem value="triveni">Triveni Sangam</SelectItem>
                      <SelectItem value="mainghat">Main Ghat</SelectItem>
                      <SelectItem value="specialarea">Special Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Security Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="z-plus">Z+ Category</SelectItem>
                      <SelectItem value="z">Z Category</SelectItem>
                      <SelectItem value="y-plus">Y+ Category</SelectItem>
                      <SelectItem value="y">Y Category</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Departure Time</label>
                  <Input type="time" />
                </div>
              </div>
              <Button className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Schedule VIP Movement
              </Button>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Automation Features</h4>
              <div className="space-y-3">
                {automationFeatures.map((feature, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <span className="font-medium text-sm">{feature.feature}</span>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                    <Badge variant="default">{feature.status}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active VIP Movements */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-600" />
            Active VIP Movements
          </CardTitle>
          <CardDescription>Real-time tracking of VIP movements and security coordination</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {vipMovements.map((movement, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{movement.dignitary}</h3>
                    <p className="text-sm text-gray-600">
                      {movement.from} → {movement.to}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant={
                        movement.status === "En Route"
                          ? "default"
                          : movement.status === "Scheduled"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {movement.status}
                    </Badge>
                    <Badge variant="outline" className="bg-red-50 text-red-700">
                      {movement.security}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">
                      {movement.departure} - {movement.arrival}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{movement.vehicles} Vehicles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Route className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{movement.route}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Secured</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Navigation className="h-3 w-3 mr-1" />
                    Track
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Alert
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Zones */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-red-600" />
            Security Zone Management
          </CardTitle>
          <CardDescription>Multi-layered security coordination for VIP areas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityZones.map((zone, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{zone.zone}</h4>
                  <Badge
                    variant={
                      zone.status === "Secured" ? "default" : zone.status === "Monitoring" ? "secondary" : "outline"
                    }
                  >
                    {zone.status}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Personnel: {zone.personnel}</p>
                  <p>Coverage: {zone.coverage}</p>
                </div>
                <Button size="sm" className="w-full mt-3">
                  Monitor Zone
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency VIP Controls */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Emergency VIP Controls</CardTitle>
          <CardDescription>Immediate response and coordination controls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="destructive" className="h-20 flex-col gap-2">
              <AlertTriangle className="h-5 w-5" />
              Emergency Alert
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Route className="h-5 w-5" />
              Route Change
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Shield className="h-5 w-5" />
              Security Boost
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Phone className="h-5 w-5" />
              Command Center
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
