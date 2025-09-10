import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Accessibility,
  Heart,
  Eye,
  Ear,
  Navigation,
  MapPin,
  Users,
  CheckCircle,
  AlertCircle,
  Phone,
  ShipWheelIcon as Wheelchair,
} from "lucide-react"

export default function AccessibilityPanel() {
  const accessibilityServices = [
    {
      name: "Wheelchair Accessible Routes",
      description: "Barrier-free paths to all major ghats",
      status: "Active",
      coverage: "100%",
      users: 1247,
      icon: Wheelchair,
    },
    {
      name: "Audio Navigation System",
      description: "Voice-guided navigation for visually impaired",
      status: "Active",
      coverage: "95%",
      users: 342,
      icon: Ear,
    },
    {
      name: "Sign Language Interpreters",
      description: "On-demand interpretation services",
      status: "Available",
      coverage: "24/7",
      users: 89,
      icon: Eye,
    },
    {
      name: "Medical Assistance Points",
      description: "Emergency medical support stations",
      status: "Active",
      coverage: "Every 500m",
      users: 156,
      icon: Heart,
    },
  ]

  const elderlyServices = [
    { name: "Priority Seating Areas", availability: "Available", capacity: "85%" },
    { name: "Assisted Walking Support", availability: "24/7", capacity: "Available" },
    { name: "Rest Stations", availability: "Every 200m", capacity: "Good" },
    { name: "Medical Emergency Response", availability: "Immediate", capacity: "Ready" },
  ]

  const accessibilityFeatures = [
    { feature: "Ramp Access", status: true, locations: 84 },
    { feature: "Tactile Pathways", status: true, locations: 67 },
    { feature: "Audio Announcements", status: true, locations: 92 },
    { feature: "Braille Signage", status: true, locations: 78 },
    { feature: "Emergency Call Points", status: true, locations: 156 },
    { feature: "Accessible Restrooms", status: true, locations: 45 },
  ]

  return (
    <div className="space-y-6">
      {/* Accessibility Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Divyangjan Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,834</div>
            <p className="text-xs text-green-600">Currently Assisted</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Elderly Pilgrims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">12,456</div>
            <p className="text-xs text-blue-600">Special Assistance</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Accessible Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <p className="text-xs text-purple-600">Fully Accessible</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Support Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">456</div>
            <p className="text-xs text-orange-600">On Duty</p>
          </CardContent>
        </Card>
      </div>

      {/* Accessibility Services */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Accessibility className="h-5 w-5 text-blue-600" />
            Universal Access Services
          </CardTitle>
          <CardDescription>Comprehensive accessibility support for all pilgrims</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accessibilityServices.map((service, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-start gap-3">
                    <service.icon className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <Badge variant={service.status === "Active" ? "default" : "secondary"}>{service.status}</Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{service.coverage}</div>
                    <div className="text-xs text-gray-500">Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{service.users}</div>
                    <div className="text-xs text-gray-500">Active Users</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    <div className="text-xs text-gray-500">Operational</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <MapPin className="h-3 w-3 mr-1" />
                    Locate
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline">
                    <Navigation className="h-3 w-3 mr-1" />
                    Navigate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Elderly Care Services */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-600" />
            Elderly Care & Support
          </CardTitle>
          <CardDescription>Specialized services for elderly pilgrims</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {elderlyServices.map((service, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{service.name}</h4>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Availability: {service.availability}</p>
                  <p>Capacity: {service.capacity}</p>
                </div>
                <Button size="sm" className="w-full mt-3">
                  Request Service
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Features Status */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Accessibility Features Status
          </CardTitle>
          <CardDescription>Real-time status of accessibility infrastructure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accessibilityFeatures.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <div className="flex items-center gap-3">
                  <Switch checked={item.status} />
                  <span className="font-medium">{item.feature}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{item.locations} locations</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Accessibility */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Emergency Accessibility Controls</CardTitle>
          <CardDescription>Quick access to emergency accessibility services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <AlertCircle className="h-5 w-5" />
              Emergency Alert
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Phone className="h-5 w-5" />
              Medical Support
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Navigation className="h-5 w-5" />
              Evacuation Route
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Users className="h-5 w-5" />
              Staff Dispatch
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
